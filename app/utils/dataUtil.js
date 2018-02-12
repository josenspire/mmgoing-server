const moment = require('moment')
const superagent = require('superagent')
const DATA_URL = 'http://itwww.bigschedules.com/openapi/weather/typhoon?appKey=b678b140-9cdc-11e6-a389-0f65b690f787'

let getTyphoonJson = cb => {
    superagent.get(DATA_URL)
        .end((err, resc) => {
            if (err) {
                cb({
                    status: 'ERROR',
                    msg: 'SERVER REQUEST ERROR'
                })
            } else {
                cb({
                    status: 'SUCCESS',
                    data: resc.body,
                })
            }
        })
}

module.exports = {
    getTyphoonJson,
}