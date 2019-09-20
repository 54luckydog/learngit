//向微信请求code
function _getWxCode({url,success,fail}){
    //这个url是像微信服务端发送的请求url
    let _url=url;
   // let _reqData=reqData;
    let _reqSuccess=(res)=>{
        console.log(res)
        success(res)
        //farm.dbcenter.wxCode=res.code
    };
    let _reqFail=(res)=>{
        fail()
        console.log("获得code失败")
    };
    farm.getDataFromSever({url:_url,data:{},success:_reqSuccess,fail:_reqFail});
};


//像微信请求用户信息
function _getUserInfo({url,reqData,success,fail}){
    let _url=url;
    let _reqData=reqData;
    let _reqSuccess=(res)=>{
        console.log(res)
        success(res)
        //farm.dbcenter.wxCode=res.code
    };
    let _reqFail=(res)=>{
        console.log("获得code失败")
        fail()
    };
    farm.getDataFromSever({url:_url,data:_reqData,success:_reqSuccess,fail:_reqFail});
}


//向本地服务器发送请求
function wxLogin({success,fail}){
    //调用获取code函数
    if(!farm.dbcenter.wxCode){
        _getWxCode({url:"",success(res){
            farm.dbcenter.wxCode=res.code
        },fail(){
            console.log("请求code失败")
        }})
    };
    //调用请求用户信息函数
    let userInfoReqData={
        withCredentials: true,
        lang: zh_CN,
    };
    _getUserInfo({url:"",reqData:userInfoReqData,success(res){
        let userInfo = res.userInfo;
            farm.dbcenter.SNSLoginInfo.nickName = userInfo.nickName;//昵称
            farm.dbcenter.SNSLoginInfo.avatarUrl = userInfo.avatarUrl;//头像的url
            farm.dbcenter.SNSEncryptedData = res.encryptedData;
            farm.dbcenter.SNSIV = res.iv;

    },fail(res){
        console.log("获得用户信息失败")
    }})
    //向服本地服务器索要数据
    let _url="";
    let _reqData = {
        code: farm.dbcenter.wxCode,
        loginInfo: farm.dbcenter.SNSLoginInfo,
        encryptedData: farm.dbcenter.SNSEncryptedData,
        iv: farm.dbcenter.SNSIV,
    };
    let _reqSuccess=(resData)=>{
        console.log(resData)
        farm.dbcenter.loginData=resData;
        success(resData);
    };
    let _reqFail=(res)=>{
        console.log("获得code失败")
        fail();
    };
    farm.getDataFromSever({url:_url,data:_reqData,success:_reqSuccess,fail:_reqFail});
}