let requestUtil = require("../utils/requestUtil")

exports.wxJsCode2Session = async (url, cb) => {
    try {
        let result = await requestUtil.get(url);
        cb(result);
    } catch (err) {
        cb(err)
    }
}