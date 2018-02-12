const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  telephone: {
    type: String,
    default: ""
  },

  nickName: {
    type: String,
    default: ""
  },

  gender: {
    type: Number,
    default: 0
  },

  city: {
    type: String,
    default: ""
  },

  province: {
    type: String,
    default: ""
  },

  country: {
    type: String,
    default: ""
  },

  avatarUrl: {
    type: String,
    default: ""
  }
}, {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
  }
);

module.exports = UserSchema