const superagent = require("superagent");

let get = url => {
    return new Promise((resolve, reject) => {
        superagent.get(url)
            .end((err, resc) => {
                if (err) {
                    reject("Server error, request fail");
                } else {
                    resolve(resc.body);
                }
            })
    })
}

let post = (url, params) => {
    return new Promise((resolve, reject) => {
        superagent.post(url)
            .send(params)
            .end((err, resc) => {
                if (err) {
                    reject("Server error, request fail");
                } else {
                    resolve(resc.body);
                }
            })
    })
}

module.exports = {
    get,
    post
}