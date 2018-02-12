const AdvertsDao = require("../dao/adverts.server.dao");

exports.getAdvertsList = (params, cb) => {
    AdvertsDao.queryAdvertsList(params, result => {
        cb(result);
    })
};

exports.createAdvers = (adverts, cb) => {
    AdvertsDao.createAdvers(adverts, result => {
        cb(result);
    })
}