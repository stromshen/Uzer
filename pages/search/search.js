// pages/search/search.js
var app = getApp();
var searchValue = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotel:"",
    centent_Show: true,
    searchValue: '',
    img: '',
    nanshen_card: ''
  },
  onLoad: function () {
  },
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
    if (!value && this.data.productData.length == 0) {
      this.setData({
        centent_Show: false,
      });
    }
  },
  suo: function (e) {
    var id = e.currentTarget.dataset.id
    var program_id = app.program_id;
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:81/applet/Uzer/Uzer/data/search.php',//这里填写后台给你的搜索接口
      method: 'post',
      data: { str: that.data.searchValue, program_id: program_id, style: id },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.length == 0) {
          that.setData({
            centent_Show: false,
          });
        }
        that.setData({
          nanshen_card: res.data,
        });
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    });
  },
  onPostTap: function (event) {  //点击输出outer view bindtap
    var postId = event.currentTarget.dataset.postid;
    wx.switchTab({
      url: '../index/index'
    })
  },
})
