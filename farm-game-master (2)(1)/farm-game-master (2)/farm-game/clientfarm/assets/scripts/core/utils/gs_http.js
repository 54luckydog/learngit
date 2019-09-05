//FileName:gs_http.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description:
//Modify:zhengyunlong修改了代码规范

let GSHttp = {
    httpPost(url, reqData, callback) {
        //发起请求
        let xhr = new XMLHttpRequest();
        // let xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.response;
                    console.log(response)

                    if (response) {
                        console.log("开始解析response 文件")

                        var responseJson = JSON.parse(response); // 解析完的json 文件再返回 回调函数
                        console.log(responseJson)
                        console.log("解析完毕，执行回调函数")
                        callback(responseJson);
                    } else {
                        console.log("返回数据不存在")
                        callback(false);
                    }
                } else {
                    console.log("请求失败")
                    callback(false);
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("access_token", "1");
        xhr.send(JSON.stringify(reqData));
    }
};

module.exports = GSHttp;