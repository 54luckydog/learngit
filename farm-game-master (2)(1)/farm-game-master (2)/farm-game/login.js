
wx.login({
    success: (params) => {
        DEBUG_MODEL && hoolai.Output.err(null, 'wx login success, params:' + JSON.stringify(params));
        hoolai.BIlog.clickStat(hoolai.BIEventType.WxLoginSuccess, [params.code]);
        if (params.code) {
            var code = params.code;
            hoolai.UserInfo.userInfoScopeState = false;
            if(!hoolai.SNSLoginCodeDebug){
                hoolai.SNSLoginCode = code;
            }
            hoolai.SNSLoginInfo = {};
            hoolai.SNSEncryptedData = '';
            hoolai.SNSIV = '';
            onSuccess(code,{});
        }
    },

    fail: (params) => {
        hoolai.BIlog.clickStat(hoolai.BIEventType.WxLoginFailed, []);
        onError(ErrorInfo.LOGING_FAILED + ':' + 'wx login fail, params:' + JSON.stringify(params));
    }
});