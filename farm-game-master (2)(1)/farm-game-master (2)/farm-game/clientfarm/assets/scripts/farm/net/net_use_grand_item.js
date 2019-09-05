//FileName:net_use_grand_item.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//
const TAG = 'NET_USE_GRAND_ITEM';
const Log = GS.Log.create(TAG);

class UseGrandItemRequest{
    constructor(cmd,userId){  //此处的"cmd":浇水/除草/施肥/除虫
        this._cmd=cmd
        this._userId=userId
        this.reqData={
            "cmd":this._cmd,
            "userId":this._userId
        };
        this._url=""
    };
    
    request(){
       // let url=""
        GS.Http.httpPost(this,_url,this.reqData, function(responseJson){
            if(responseJson.code===0){
                return responseJson.data
            }else{
                Log.debug(responseJson.msg)
            }

        })
    }


}
//let log=new Log()
module.exports=UseGrandItemRequest