// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotel:"",
  },
  onPostTap: function (event) {  //点击输出outer view bindtap
    var postId = event.currentTarget.dataset.postid;
    wx.switchTab({
      url: '../index/index'
    })
  },
})