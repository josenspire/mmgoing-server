const mongoose = require('mongoose')

let ProductSchema = new mongoose.Schema({
    GoodsID: {
        unique: true,
        type: String
    },
    Title: {
        type: String,
        index: true
    },
    D_title: String,
    Pic: String,
    Cid: String,
    Org_Price: String,
    Price: Number,
    IsTmall: String,
    Sales_num: String,
    Dsr: String,
    SellerID: String,
    Commission: String,
    Commission_jihua: String,
    Commission_queqiao: String,
    Jihua_link: String,
    Que_siteid: String,
    Jihua_shenhe: String,
    Introduce: String,
    Quan_id: String,
    Quan_price: String,
    Quan_time: String,
    Quan_surplus: String,
    Quan_receive: String,
    Quan_condition: String,
    Quan_m_link: String,
    Quan_link: String,
}, {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    }
);

module.exports = ProductSchema