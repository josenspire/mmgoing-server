const mongoose = require('mongoose')

let AdvertsSchema = new mongoose.Schema({
    advertsUrl: {
        type: String,
        default: ""
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    }
);

module.exports = AdvertsSchema;