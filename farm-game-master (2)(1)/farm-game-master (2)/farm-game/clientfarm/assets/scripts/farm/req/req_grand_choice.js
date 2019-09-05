//这是做测试用的文件

cc.Class({
    extends: cc.Component,

    properties: {

    },

    
    onLoad() {
        this.request()
    },

    
    request() {
        let reqData={
            "cmd":"获取未销售土地列表",
            "params":{              
            "dapengId":"0-100" //   
            }
        };
        // let url=""
        GS.Http.httpPost("http://47.111.22.119:80/greenhouse/game/purchaseLand", reqData, function (responseJson) {
            if (responseJson.code === 0) {
                return responseJson.data
            } else {
                
            }

        })
    }

    //let log=new Log()
    //export default LogRequest

});