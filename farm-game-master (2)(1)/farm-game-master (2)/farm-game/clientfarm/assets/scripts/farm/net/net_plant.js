//FileName:net_plant.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//
const TAG = 'NET_PLANT';
const Log = GS.Log.create(TAG);

class PlantRequest{
    constructor(grandId,seedId){
        this._grandId=grandId
        this._seedId=seedId
        this._reqData={
            "grandId":this._grandId,
            "seedId":this._seedId
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
module.exports=PlantRequest