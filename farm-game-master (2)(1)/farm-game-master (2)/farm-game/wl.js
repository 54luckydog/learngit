app({
    onLoad: function(options) {
        //这个getSetting是用来判断是否授权的
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  //app.globalData.userInfo = res.userInfo;
                  //此处应该把获取到的用户信息存到全局名称空间里面
                  this.autoLogin();
                }
              })
            } else {
              //表示未授权，显示授权按钮
              //打开授权
              //此处应该有个回调函数去继续获取用户信息，并且把用户信息存在全局名称空间里面
            }
          }
        });
      },
      autoLogin: function () {
        //定义当前页面对象
        let that = this;
        //登录前，先从微信获得用户的基本信息，我们主要就是要获得code，换取openid
        this.setData({
          loginLoading:true,
          loginText:'登录中...',
        });
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            // 如果openid已存在，后台会查询用户数据，如果不存在，会将用户保存
            if (res.code) {
              console.log('进入查询方法内部：：：'+res.code);
              wx.request({
                url: app.globalData.url + '/getopenid',
                data: {
                  code: res.code,
                  userInfo: app.globalData.userInfo
                },
                method: "POST",
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  if (res.data.flag){
        //这里根据后台返回内容，将user信息保存到app.globalData中，作为全局变量
                    app.globalData.loginServerFlag = true;
                    let user = app.globalData.userInfo;
                    wx.redirectTo({
                      url: '../doctorList/doctor-video/doctor-video' 
                    });
                  }else{
                    that.setData({
                      loginLoading: false,
                      loginText: '授权登录',
                      errorMsg: res.data.msg
                    });
                  }
                }
              })
            }else{
              this.setData({
                loginLoading: false,
                errorMsg: '微信拒绝了获取用户信息的请求'
              });
            }
          }
        })
      },
})

/*
      wx.uploadFile({
        url:"", //里面填写你的上传图片服务器API接口的路径
        filePath: tempFilePaths[0],//要上传文件资源的路径 String类型
        name: 'img',//按个人情况修改，文件对应的 key,开发者在服务器端通过这个 key 可以获取到文件二进制内容，(后台接口规定的关于图片的请求参数)
        header: {
          "Content-Type": "multipart/form-data"//记得设置
        },
        formData: {
          //和服务器约定的token, 一般也可以放在header中
          'session_token': wx.getStorageSync('session_token')
        },
        success: function (res) {
          //当调用uploadFile成功之后，再次调用后台修改的操作，这样才真正做了修改头像
          if (res.statusCode = 200) {
            // var data = res.data
            // var statusCode = res.statusCode
            // console.log("返回值1" + data);
            // console.log("返回值2" + statusCode)
            //这里调用后台的修改操作， tempFilePaths[0],是上面uploadFile上传成功，然后赋值到修改这里。
            wx.request({
              url: getApp().globalData.clientUrl + '/update?avatar=' + tempFilePaths[0], //真正修改操作,填写你们修改的API
              header: {
                'content-type': 'application/json',
              },
              method: 'POST',
              success: function (res) {
                if (res.data.code == 200) {
                  wx.showToast({
                    title: '修改成功',
                    icon: 'success',
                    duration: 2500
                  })

                  //wx.uploadFile自已有一个this，我们刚才上面定义的var _this = this 把this带进来
                  _this.setData({
                    "user.avatar": tempFilePaths[0]
                  });
                }
              },
            })
          }
        }
      })
      */
/*
function uploadPhoto(){
wx.chooseImage({
   success (res) {
     let tempFilePaths = res.tempFilePaths
     wx.uploadFile({
       url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
       filePath: tempFilePaths[0],
       name: 'file',
       formData: {
         'user': 'test'
       },
       success (res){
         let data = res.data
         //do something
       }
     })
   }
 });
};
*/