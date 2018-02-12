// const Typhoon = require('../models/typhoon')

exports.index = (req, res) => {
    return res.render('index', {
        title: 'Hello MMGoing!'
    })
}