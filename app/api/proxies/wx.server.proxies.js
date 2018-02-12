const path = require("path");
const requestUtil = require(path.resolve("./app/utils/requestUtil"))

exports.getSessionKey = async (appId, secret, code, cb) => {
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;

    try {
        let result = await requestUtil.post(url, {});
        let sessionInfo = {};
        sessionInfo.openid = result.data.openid;
        sessionInfo.expires_in = Date.now() + result.data.expires_in;
        cb(sessionInfo);
    } catch (err) {
        cb(err)
    }
}