var network = require('../../service/Network');

wx.createCanvas
wx.showNavigationBarLoading()
wx.setNavigationBarTitle({
    title: '当前页面'
})

Page({

    clickMe: function () {
        // this.setData({ msg: "Hello World" })
        wx.navigateTo({
            url: "../logs/logs"
        })
    },
    test: function (val) {
        console.log(val)
    },
    getData: function () {
        var that = this;
        var url = '/getProductInfo'
        var dataToPost = {
            organization_id: 'msbank',
            order_type: 501,
            source: 'msbank',
        }
        return new Promise(function (resolve, reject) {
            network.post(url, dataToPost)
                .then(function (res) {
                    resolve(res)
                    console.log(res)
                })
                .catch(function (msg) {
                    console.log(msg)
                });
        })
    },
    data: { // 参与页面渲染的数据
        testData:"test_data",

        dataList: [
            {
                name: "ha1",
                age: 20,
                idCard: "123654654654654564"
            },
            {
                name: "ha2",
                age: 22,
                idCard: "123654654654654564"
            },
            {
                name: "ha3",
                age: 23,
                idCard: "123654654654654564"
            },
            {
                name: "ha4",
                age: 24,
                idCard: "123654654654654564"
            },
            {
                name: "hah5",
                age: 25,
                idCard: "123654654654654564"
            },
            {
                name: "hah6--",
                age: 26,
                idCard: "123654654654654564"
            },
        
        
        
        ],
    },
    onLoad: function () {
        // 页面渲染后 执行
        console.log("index页面渲染后执行")

        var that = this;
        that.getData()
            .then(function (res) {
                console.log(res)
            })
            .catch(function (msg) {
                console.log(msg)
            });
    },
    testClick:function (e) {
        console.log("testClick",e)        
    },
    testClick2: function (e) {
      console.log("testClick2", e)
      this.setData({
        dataList: [
          {
            name: "qha1",
            age: 20,
            idCard: "123654654654654564"
          },
          {
            name: "qha2",
            age: 22,
            idCard: "123654654654654564"
          },
          {
            name: "qha3",
            age: 23,
            idCard: "123654654654654564"
          },
          {
            name: "qha4",
            age: 24,
            idCard: "123654654654654564"
          },
          {
            name: "qhah5",
            age: 25,
            idCard: "123654654654654564"
          },
          {
            name: "qhah6--",
            age: 26,
            idCard: "123654654654654564"
          },
        ] })
    }
})