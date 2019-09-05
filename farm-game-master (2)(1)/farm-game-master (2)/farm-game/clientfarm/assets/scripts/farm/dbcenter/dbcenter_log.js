//FileName:dbcenter_log.js
//Author:zhengyunlong
//CreateDate:2019-08-30 21:28
//Description: 上传图片
//Modify:zhengyunlong修改了代码

const TAG = 'DBCENTER_LOG';
const Log = GS.Log.create(TAG);
let LogRequest = require('farm/net/net_log.js');

class DbLog {
    globalData = {
        "logs": this.reqData.logs
    };

    logReq = LogRequest.LogRequest;
    constructor() {
        this._pageId = 0;
    };

    get getData() {
        return this.globalData
    };

    previousPage() {
        console.log("上一页")
        Log.debug("上一页")
        if (this._pageId >= 0) {
            this._pageId = this._pageId - 1;
        } else {
            this._pageId = 0
        };
        let log = new logReq(this._pageId, 10);
        this.reqData = log.request();
    };

    nextPage() {
        console.log("下一页")
        Log.debug("下一页")
        if (this._pageId >= 0) {
            this._pageId = this._pageId + 1;
        } else {
            this._pageId = 0
        };
        let log = new logReq(this._pageId, 10);
        this.reqData = log.request();
    }
}

module.exports = DbLog