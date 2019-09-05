
//export default LogRequest
//FileName:net_log.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//日志请求
const TAG = 'NET_LOG';
const Log = GS.Log.create(TAG);

class LogRequest{
    constructor(pageId,count){
        this._pageId=pageId
        this._count=count
        this.reqData={
            "pageId":this._pageId,
            "count":this._count
        };
        this._url=""
    };
    
    request(){
       // let url=""
        GS.Http.httpPost(this._url,this.reqData, function(responseJson){
            if(responseJson.code===0){
                return responseJson.data
            }else{
                Log.debug(responseJson.msg)
            }

        })
    }


}
//let log=new Log()
module.exports=LogRequest