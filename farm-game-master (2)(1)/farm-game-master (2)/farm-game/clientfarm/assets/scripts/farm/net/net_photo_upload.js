//FileName:net_photo_upload.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description: 上传图片
//Modify:zhengyunlong修改了代码

const TAG = 'NET_PHOTO_UPLOAD';
const Log = GS.Log.create(TAG);

class LogRequest{
    constructor(filePath){
        this._filePath=filePath
        this.reqData={
            "photoData":this._filePath
        };
        this._url=""
    };
    
    request(){
       // let url=""
        GS.Http.httpPost(this._url,this.reqData, function(responseJson){
            if(responseJson.code===0){
                return responseJson.data
            }else{
                Log.debug("")
            }

        })
    }


}
//let log=new Log()
module.exports=LogRequest
//export default LogRequest