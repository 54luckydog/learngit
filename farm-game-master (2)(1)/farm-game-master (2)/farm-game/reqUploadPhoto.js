//上传图片到本地服务器请求
function uploadFileReq(){
    _wxChooseImg({success(resData){
        farm.dbcenter.tempFilePaths = resData.tempFilePaths;
        _uploadFile({success(data){
            //此处应该做服务端返回的数据处理
            //需要更新下本地照片信息-->重新拉一下数据
            _updataPhotoInfo()
        }, fail(data){}})
    },fail(resData){
        console.log("请求失败") 
    }})
}

//更新照片信息
function _updataPhotoInfo(){
    Log.debug("getPhotoInfo");   

    let _reqSuccess=(data)=>{
        farm.dbcenter.photoInfo=data;
    }
    let _reqFailed=(data)=>{
        console.log("更新失败")
    } 
    
    farm.getDataFromSever({url:"本地服务器的url",data:{},success:_reqSuccess,fail:_reqFailed});
};

//选择图片
function _wxChooseImg({success,fail}) {
    let _url="微信服务器的url";
    let _reqData={
        count:1,
        sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
    };
    let _reqSuccess=(resData)=>{
        console.log("请求成功");
        farm.dbcenter.tempFilePaths = resData.tempFilePaths;
        success(resData);
    };
    let _reqFail=(resData)=>{
        console.log("请求失败");
        fail();
    };
    farm.getDataFromSever({ url: _url, data: _reqData, success: _reqSuccess, fail: _reqFail });

  };
//上传文件
//调用这个协议后应该会重新刷新一下相册信息
function _uploadFile({success, fail}) {
    let _reqData = {
      url: "本地服务器的url",
      filePath: farm.dbcenter.tempFilePaths[0],
      name: 'img',
    };
    let _reqSuccess = (data) => {
      console.log("上传文件请求成功")
      success(data)
    };
    let _reqFailed = (data) => {
      console.log("上传文件请求失败")
      fail()
    };
    farm.getDataFromSever({ url: "", data: _reqData, success: _reqSuccess, fail: _reqFailed });
  };