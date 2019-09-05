//FileName:net_get_grand.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//购买土地
const TAG = 'NET_GET_GRAND';
const Log = GS.Log.create(TAG);

class GetGrand{
    constructor(dapengId,grandId){
        this._dapengId=dapengId
        this._grandId=grandId
        this._reqData={
            "dapengId":this._dapengId,
            "grandId":this._grandId
        };
        this._url=""
    };
    
    request(){
        
        GS.Http.httpPost(this._url,this._reqData, function(responseJson){
            if(responseJson.code===0){
                return responseJson.data
            }else{
                Log.debug(responseJson.msg)
            }

        })
        
    }


}
//let log=new Log()
module.exports=GetGrand