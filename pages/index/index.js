//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [

    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    a: '#FFEFD5',
    active: '#FF8C00',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    xingxing:[
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png',
      '../../images/nav/xing.png'
    ]
  },
  onLoad: function () {
    this.lunbo("http://127.0.0.1:81/applet/Uzer/Uzer/data/index.php?hotel_type=1");
    this.hotel("http://127.0.0.1:81/applet/Uzer/Uzer/data/index.php?hotel_type=2");
    // console.log(111);
  },
  lunbo:function(url){
    var that=this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        var lunbo=res.data;
        that.setData({
          lunbo: lunbo
        })
        // console.log(lunbo);
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },
  hotel:function(url){
    var that=this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        var hotel=res.data;
        that.setData({
          hotel: hotel
        })
        // console.log(hotel);
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },
  onPostTap: function (event) {  //点击输出outer view bindtap
    var postId = event.currentTarget.dataset.postid;
     console.log(postId);
    wx.navigateTo({
      url: "../products/products?id=" + postId
    })
  },
})
