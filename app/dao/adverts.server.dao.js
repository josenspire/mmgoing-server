
const { SUCCESS, FAIL, SERVER_ERROR } = require("../utils/constants.server.utils");

const AdvertsModel = require("../models/adverts.server.model");

exports.queryAdvertsList = (params, cb) => {
    let result = { status: FAIL, data: {}, message: "" };
    AdvertsModel.find({}, (err, dataList) => {
        if (err) {
            result.message = err.message;
        } else {
            result.data = dataList;
            result.status = SUCCESS;
        }
        cb(result);
    })
}

exports.createAdvers = (adverts, cb) => {
    let result = { status: FAIL, data: {}, message: "" };
    let _adverts = {};
    _adverts.advertsUrl = adverts.advertsUrl;

    let advertsModel = new AdvertsModel(_adverts);
    advertsModel.save(adverts, (err, data) => {
        if (err) {
            result.message = err.message;
        } else {
            result.status = SUCCESS;
        }
        cb(result);
    })
}