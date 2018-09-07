// pages/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/lunbo/1.jpg',
      '../../images/lunbo/2.jpg',
      '../../images/lunbo/3.jpg',
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    a: '#FFEFD5',
    active: '#FF8C00',
    showModal: false,

    xingxing: [
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png'
    ]
  },
  onLoad: function () {
  },
  /**
   * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '12345678900', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  onLoad: function (option) {
    var that=this;
    var postId = option.id;
    this.data.currentPostId = postId;
    this.products("http://127.0.0.1:81/applet/Uzer/Uzer/data/products_1.php?sid="+postId);
    this.room("http://127.0.0.1:81/applet/Uzer/Uzer/data/products_2.php?sid="+postId);
    console.log(postId);
  },
  products:function(url){
    var that=this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        var products=res.data;
        var lunbo=(products[0].hotle_lubbo);
        var strs= new Array(); //定义一数组
        strs=lunbo.split("^"); //字符分割
        console.log(strs);
        that.setData({
          products:products,
          strs:strs
        })
        console.log(res);
      },
      fail: function (error) {
        // fail
        console.log(error)
      }
    })
  },
  room:function(url){
    var that=this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        var room=res.data;
        that.setData({
          room: room
        })
        console.log(room);
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },

})
