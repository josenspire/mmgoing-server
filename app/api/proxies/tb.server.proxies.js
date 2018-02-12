const TopClient = require('../taobao/api/topClient.js').TopClient;

const client = new TopClient({
    'appkey': '23557591',
    'appsecret': '62ced26b067b4a5daabbbe85d03eb79e',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
})

// get item info from taobao api
let getGoodsDetail = itemId => {
    return new Promise((resolve, reject) => {
        client.execute('taobao.tbk.item.info.get', {
            'fields': 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url',
            'platform': '1',
            'num_iids': itemId
        }, (error, response) => {
            if (!error) {
                resolve(response)
            } else {
                console.log(error)
                reject('TB_API_ERROR')
            }
        })
    })
};

module.exports = {
    getGoodsDetail
}

