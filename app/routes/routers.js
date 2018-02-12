const Index = require('../controllers/index')

const UserControl = require("../controllers/user.server.controller");
const AdvertsControl = require("../controllers/adverts.server.controller");
const ProductControl = require("../controllers/product.server.controller");

let index = app => {
  app.get('/', Index.index)

  // wechat api
  app.post('/api/wechat/wxJsCeode2Session', UserControl.wxJsCode2Session);

  // adv
  app.post('/api/adverts/createAdvers', AdvertsControl.createAdvers);
  app.get('/api/adverts/getAdvertsList', AdvertsControl.getAdvertsList);

  // products
  app.post('/api/product/savePaol', ProductControl.savePaol);
  app.get('/api/product/list/json', ProductControl.getProductList);
  app.get('/api/product/detail/:id', ProductControl.getProductDetail);
  app.get('/api/product/detail/pics/:id', ProductControl.getProductDetailPics);
  
}

module.exports = index;
