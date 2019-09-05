//FileName:net_bag_infor.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//购买商城道具
const TAG = 'NET_BAG_INFO';
const Log = GS.Log.create(TAG);

class BagInforRequest{
    constructor(){
    
        this._reqData={};
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
module.exports=BagInforRequest