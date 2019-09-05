//FileName:net_delete_photo.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码
//删除照片
const TAG = 'NET_DELETE_PHOTO';
const Log = GS.Log.create(TAG);

class PhotoDeleteRequest{
    constructor(photoId){
        this._photoId=photoId
        this._reqData={
            "userId":this._photoId
        };
        this._url=""
    };
    
    request(){
        
        GS.Http.httpPost(this._url,this._reqData, function(responseJson){
            if(responseJson){
                return responseJson.data
            }else{
                Log.debug(responseJson)
            }

        })
        //return
    }


}
//let log=new Log()
module.exports=PhotoDeleteRequest