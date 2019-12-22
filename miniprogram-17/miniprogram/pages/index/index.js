Page({
  data: {
    inputValue:''
  },
  input1: function (e){
  var value=e.detail.value
  this.setData({
    inputValue:value
  })
  },
  baoming: function(){
    wx.showToast({
      title: '报名成功',
    })
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/footer/footer',
      })
    }, 2000);
  }  
})
function getDeviceInfo(that) {
  //查看设备连接状态，并刷新按钮状态
  wx.request({
    url: deviceInfoURL,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      "api-key": apikey
    },
    data: {

    },
    success(res) {
      // console.log(res)
      if (res.data.data.online) {
        console.log("设备已经连接")
        deviceInit(that)//初始化按钮
        deviceConnected = true
      } else {
        console.log("设备还未连接")
        deviceConnected = false
      }
    },
    fail(res) {
      console.log("请求失败")
      deviceConnected = false
    },
    complete() {
      if (deviceConnected) {
        that.setData({ deviceConnected: true })
      } else {
        that.setData({ deviceConnected: false })
      }
    }
  })
}