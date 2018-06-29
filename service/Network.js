var config = require('../config/config')

var network = {
    post: function (url,dataToPost) {
        console.log(url)
        return new Promise(function (resolve, reject) {
            wx.request({
                url: config.host + url, //仅为示例，并非真实的接口地址
                data: dataToPost,
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // form
                },
                success: function (res) {
                    console.log(res.data)
                    resolve(res)
                },
                error:function (res) {
                    reject(res)
                }
            })
            // resolve('haha')
        })
    }
}

module.exports = network;