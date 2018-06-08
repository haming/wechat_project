wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    var latitude = res.latitude // 经度
    var longitude = res.longitude // 纬度
  }
})

Page({
  onLoad: function () {
    // 页面渲染后 执行
    console.log("logs页面渲染后 执行")
  },
})

