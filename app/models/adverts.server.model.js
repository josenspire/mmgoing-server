const mongoose = require('mongoose')
const AdvertsSchema = require('../schemas/adverts.server.schema')
const Adverts = mongoose.model('Adverts', AdvertsSchema)

module.exports = Adverts;