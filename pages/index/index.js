wx.createCanvas

Page({
  clickMe: function () {
    // this.setData({ msg: "Hello World" })
    wx.navigateTo({
      url:"../logs/logs"
    })
  },
  test:function(val){
    console.log(val)
  },
  data: { // 参与页面渲染的数据
   
  },
  onLoad: function () {
    // 页面渲染后 执行
    console.log("index页面渲染后 执行")
  },
})