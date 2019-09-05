//FileName:net_use_bag_item.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//获取照片信息
const TAG = 'NET_USE_BAG_ITEM';
const Log = GS.Log.create(TAG);

class UseBagItemRequest{
    constructor(itemId){
        this._itemId=itemId
        this._reqData={
            "itemId":this._itemId,
            "params":{}
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
module.exports=UseBagItemRequest