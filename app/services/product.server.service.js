const ProductDao = require("../dao/product.server.dao");
const TaobaoProxy = require("../api/proxies/tb.server.proxies");
const { SUCCESS, FAIL, SERVER_ERROR } = require("../utils/constants.server.utils");

exports.getProductList = (page, cb) => {
    ProductDao.queryProductList(page, result => {
        cb(result);
    })
}

exports.getProductDetail = (goodsId, cb) => {
    ProductDao.queryProductDetailByGoodsId(goodsId, result => {
        cb(result);
    })
}

exports.getProductDetailPics = async (goodsId, cb) => {
    let result = { status: FAIL, data: {}, message: "" };
    try {
        let details = await TaobaoProxy.getGoodsDetail(goodsId);
        let data = details.results.n_tbk_item[0];
        let pics = [];
        pics = data.small_images.string;
        pics.unshift(data.pict_url);
        result.data.pics = pics;
        result.status = SUCCESS;
    } catch (err) {
        result.message = err;
    }
    cb(result);
}

exports.savePaol = (productList, cb) => {
    ProductDao.savePaol(productList, result => {
        cb(result);
    })
}