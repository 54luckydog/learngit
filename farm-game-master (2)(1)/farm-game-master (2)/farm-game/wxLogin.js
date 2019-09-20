function getDataFormLogin() {
    wx.getSetting({
        success(res) {
            if (res.authSetting.scope.userInfo) {//['scope.userInfo']
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                getUserInfo()
            } else {
                //表示未授权，显示授权按钮
                //打开授权
                //此处应该有个回调函数去继续获取用户信息，并且把用户信息存在全局名称空间里面
                wx.openSetting({
                    success (res) {
                      console.log(res.authSetting)
                      // res.authSetting = {
                      //   "scope.userInfo": true,
                      //   "scope.userLocation": true
                      // }
                      getUserInfo()
                    }
                  })
            }
        }
    })
};
function getUserInfo(){
    wx.getUserInfo({
        withCredentials: true,
        lang: zh_CN,
        success(res) {
            //暂时没在名称空间里面初始化
            //farm.SNSLoginInfo. = {};
            let userInfo = res.userInfo;
            farm.dbcenter.SNSLoginInfo.nickName = userInfo.nickName;//昵称
            farm.dbcenter.SNSLoginInfo.avatarUrl = userInfo.avatarUrl;//头像的url
            farm.dbcenter.SNSEncryptedData = res.encryptedData;
            farm.dbcenter.SNSIV = res.iv;
            wxLogin()
        }
    })
};
function wxLogin(){
    wx.login({
        success(params) {
            //DEBUG_MODEL && farm.Output.err(null, 'wx login success, params:' + JSON.stringify(params));
            // farm.BIlog.clickStat(farm.BIEventType.WxLoginSuccess, [params.code]);
            if (params.code) {
                let code = params.code;
                farm.UserInfo.userInfoScopeState = false;//我觉得一开始名称空间里面应该为false，此处是微信登陆成功，应该是true才对
                if (!farm.SNSLoginCodeDebug) {//此处的SNSLoginCodeDebug 是不是应该没有Debug
                    farm.SNSLoginCode = code;
                };
                /*
                farm.SNSLoginInfo = {};
                farm.SNSEncryptedData = '';  
                farm.SNSIV = '';
                */
                let _reqData = {
                    code: farm.SNSLoginCode,
                    loginInfo: farm.dbcenter.SNSLoginInfo,
                    encryptedData: farm.dbcenter.SNSEncryptedData,
                    iv: farm.dbcenter.SNSIV,
                };
                let _reqSuccess = (data) => {
                    farm.dbcenter.loginData=data;
                    console.log("data")
                };
                let _reqFail = (data) => {
                    console.log("请求失败")
                };
                farm.getDataFromSever({url:"",data:_reqData,success:_reqSuccess,fail:_reqFail});
               

            };
        },
        fail(params) {
            console.log(JSON.stringify(params)+"失败")
            //farm.BIlog.clickStat(farm.BIEventType.WxLoginFailed, []);
            //失败之后的处理
            onError(ErrorInfo.LOGING_FAILED + ':' + 'wx login fail, params:' + JSON.stringify(params));
        }
    });
}
