//FileName:net_grand_choice.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//选择土地
const TAG = 'NET_GRAND_CHOICE';
const Log = GS.Log.create(TAG);

class GrandChoiceRequest{
    constructor(cmd,dapengId){
        this._cmd=cmd
        this._dapengId=dapengId
        this._reqData={
            "cmd":this._cmd,
            "params":{
                "dapengId":this._dapengId//0-100
            }
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
module.exports=GrandChoiceRequest