
let BagInforRequest = require('farm/net/net_bag_infor.js');

class DbBagInfor{
    globalData = {
        "items": [
            {
                "name":this.reqData.name,
                "id":this.reqData.id,
                "type":this.reqData.type,
                "desc":this.reqData.desc,
                "count":this.reqData.count
            }
        ]
    };

    bagInforReq = BagInforRequest.BagInforRequest;
    constructor() {
        let bagInfor = new bagInforReq();
        this.reqData = bagInfor.request();
    };

    get getData() {
        return this.globalData
    };

}

module.exports = DbBagInfor