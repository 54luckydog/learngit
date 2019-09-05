
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