// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xingxing: [
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png'
    ]
  },
  onPostTap: function (event) {  //点击输出outer view bindtap
    var postId = event.currentTarget.dataset.postid;
    wx.switchTab({
      url: '../index/index'
    })
  },
})