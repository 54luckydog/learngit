//FileName:net_grand_infor.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//获取土地信息
const TAG = 'NET_GRAND_INFO';
const Log = GS.Log.create(TAG);

class GrandInforRequest{
    constructor(){
        
        this._reqData={
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
module.exports=GrandInforRequest