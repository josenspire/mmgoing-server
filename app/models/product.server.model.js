const mongoose = require('mongoose')
const ProductSchema = require('../schemas/product.server.schema')
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;