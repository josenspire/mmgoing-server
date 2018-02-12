const AdvertsService = require("../services/adverts.server.service")

exports.getAdvertsList = (req, res, next) => {
    let params = req.query.params || "";
    AdvertsService.getAdvertsList(params, result => {
        return res.json(result);
    })
}

exports.createAdvers = (req, res, next) => {
    let adverts = req.body.adverts;
    AdvertsService.createAdvers(adverts, result => {
        return res.json(result);
    })
}