//FileName:net_neighbor_infor.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//获取照片信息
const TAG = 'NET_NEIGHBOR_INFOR';
const Log = GS.Log.create(TAG);

class NeighborInforRequest{
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
module.exports=NeighborInforRequest