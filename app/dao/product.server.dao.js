const ProductModel = require("../models/product.server.model");

const { SUCCESS, FAIL, SERVER_ERROR } = require("../utils/constants.server.utils");

exports.queryProductList = (page, cb) => {
    let result = { status: FAIL, data: {}, message: "" };
    ProductModel.find({}, (err, dataList) => {
        if (err) {
            result.message = err.message;
        } else {
            result.data = dataList;
            result.status = SUCCESS;
        }
        cb(result);
    })
}

exports.queryProductDetailByGoodsId = (goodsId, cb) => {
    let result = { status: FAIL, data: {}, message: "" };
    ProductModel.findOne({ GoodsID: goodsId }, (err, product) => {
        if (err) {
            result.message = err.message;
        } else {
            result.data = product;
            result.status = SUCCESS;
        }
        cb(result);
    })
}

exports.savePaol = (productList, cb) => {
    let result = { status: FAIL, data: {}, message: "" };
    ProductModel.create(productList, (err, resp) => {
        if (err) {
            result.message = err.message;
        } else {
            result.status = SUCCESS;
        }
        cb(result);
    })
}