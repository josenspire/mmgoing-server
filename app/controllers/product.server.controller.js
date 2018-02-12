const ProductService = require("../services/product.server.service");
const RequestUtil = require("../utils/requestUtil");

exports.getProductList = (req, res, next) => {
    let page = req.query.page || 1;

    ProductService.getProductList(page, result => {
        return res.json(result);
    })
}

exports.getProductDetail = (req, res, next) => {
    let goodsId = req.params.id || "";

    ProductService.getProductDetail(goodsId, result => {
        return res.json(result);
    })
}

exports.getProductDetailPics = (req, res, next) => {
    let goodsId = req.params.id || "";
    ProductService.getProductDetailPics(goodsId, result => {
        return res.json(result);
    })

}

exports.savePaol = (req, res, next) => {
    let data = req.body;
    ProductService.savePaol(data.productList, result => {
        return res.json(result);
    })
}