const Configs = require("../../configs/appConfig").appInformation;
const UserService = require("../services/user.server.service");

exports.wxJsCode2Session = (req, res, next) => {
    let params = req.body;
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${Configs.appid}&secret=${Configs.secret}&js_code=${params.code}&grant_type=authorization_code`;

    UserService.wxJsCode2Session(url, result => {
        console.log(result)
        return res.json(result);
    })
}