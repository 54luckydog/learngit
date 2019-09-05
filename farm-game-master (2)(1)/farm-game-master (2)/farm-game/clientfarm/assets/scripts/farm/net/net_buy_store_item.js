//FileName:net_buy_store_item.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//购买商城道具
const TAG = 'NET_BUY_STORE_ITEM';
const Log = GS.Log.create(TAG);

class BuyStoreItemRequest{
    constructor(itemId,num){
        this._itemId=itemId;
        this._num=num;
        this._reqData={
            "itemId":this._itemId,
            "num":this._num
        };
        this._url=""
    };
    
    request(){
        
        GS.Http.httpPost(this._url,this._reqData, function(responseJson){
            if(responseJson.code===0){
                return responseJson.data
            }else{
               // console.log(responseJson.msg)
               Log.debug(responseJson.msg)
            }

        })
       
    }


}
//let log=new Log()
module.exports=BuyStoreItemRequest