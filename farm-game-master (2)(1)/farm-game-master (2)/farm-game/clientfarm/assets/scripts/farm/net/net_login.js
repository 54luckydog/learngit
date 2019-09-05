//FileName:net_login.js
//Author:zhengyunlong
//CreateDate:2019-09-01 9：30
//Description:微信登陆
//Modify:zhengyunlong修改了代码

const TAG = 'NET_LOGIN';
const Log = GS.Log.create(TAG);
class Login{
    constructor(){
        this.globalData={
            "userInfo":""
        }
        /*
        this._code="";
        this._appId="";
        this._secret="";
        this._grandType="authorization_code";
        this._openId="";//用户唯一id
        this._session_key="";//会话密钥

        this._nickName="";
        this._avatarUrl=""//头像
        */
    };
    
    onLoad () {
        this.checkLoginStatus();
    }

    checkLoginStatus() {
        Log.debug("检查是否有登陆标识")
        let loginFlag = wx.getStorageSync("loginFlag");
        if (loginFlag) {
            //检查是否过期
            wx.checkSession({
                success: function () {
                    let userStorageInfo = wx.getStorageSync("userInfo"); //从本地缓存中同步获取key对应的value值
                    if (userStorageInfo) {
                        this.globalData.userInfo = JSON.parse(userStorageInfo); //把获取到的值传给全局变量中的userinfo
                    } else {
                        this.showInfo("缓存信息缺失");
                        Log.debug("缓存信息缺失")
                    }
                },
                fail: function () {
                    this.doLogin();
                }
            });
        } else {
            Log.debug("没有登录态")
            this.doLogin();
        }
    }

    doLogin() {
        Log.debug("登陆")
        this._uuid=uuid.creatUUID()
        wx.login({ 
            "timeout" : 1500,
            success: function (loginRes) {
                this._code=loginRes.code

                if (loginRes.code) {
                    //获取code成功 
                    wx.getUserInfo({
                        withCreadentials: true,
                        success: function (infoRes) {
                            this.userInfo = infoRes.userInfo
                            this.nickName = userInfo.nickName 
                            this.imageUrl = userInfo.imageUrl 
                            this.unionId = userInfo.unionId
                            wx.request({
                                url: "",//向服务器请求登陆
                                method:POST,
                                data: {
                                    "code": loginRes.code, //临时登陆凭证                                      
                                },
                                sucess: function (res) {
                                    Log.debug("登陆成功")
                                    Data = res.data;

                                    if (res.code == 0) {

                                        this.globalData.userInfo = Data.userInfo;

                                        wx.setStorageSync('userInfo', JSON.stringify(res.userInfo)); //将数据存储在本地缓存中指定的 key 中。
                                        wx.setStorageSync('loginFlag', JSON.stringify(res.loginFlag));

                                        wx.request({
                                            url:'',
                                            method:POST,
                                            data:{
                                                uuid:this.uuid,
                                                unionId:this.unionId,
                                                nickName:this.nickName,
                                                imageUrl:this.imageUrl,
                                            },
                                            
                                            success:function(res){

                                                if(res.code==0){
                                                   
                                                   this._loginData=res.data
                                                  // return(this.loginData)
                                                }else{
                                                    this.showInfo(res.msg)
                                                }

                                            },
                                            fail:function(res){
                                                this.showInfo(res.msg)
                                            }

                                        })  
                                    } else {
                                        this.showInfo(res.msg) //errmsg是错误信息 string类型
                                    }
                                },

                                fail: function (res) {
                                    //调用服务端登录接口失败
                                    this.showInfo(res.msg)
                                    console.log(msg);
                                },
                            });
                        },
                        fail: function () {
                            //获取用户信息失败 检查是否打开限权
                            wx.hideLoading();
                            this.checkUserInfoPermission(); //检查用户限权设置
                        }
                    });
                } else {
                    this.showInfo("登陆失败");
                    Log.debug("调用wx.login获取code失败")
                }

            },
            fail: function (error) {
               
                this.showInfo("接口调用失败")
                Log.debug(error)
                
            },
        })

    }
    //检查用户限权设置
    checkUserInfoPermission() {
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.userInfo']) {
                    wx.authorize({
                        scop: 'scope.userInfo',
                        success() {},
                        fail() {
                            wx.openSetting({
                                success: function (res) {
                                    Log.debug("openSetting success")
                                },
                                fail: function (res) {
                                    Log.debug("openSetting fail")
                                }
                            });
                        }
                    });
                }
            },
            fail: function (error) {
                Log.debug(error)
            }
        });

    };
    showInfo(title, icon ) {
        wx.showToast({
            title: title,
            icon: icon,
            duration: 1500,
            mask: true 
        });

    };
    showloginData(){
        return(this._loginData)
    }
}
let login=new Login();
module.exports.Login=login