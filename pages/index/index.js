var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: {
      searchValue: '',
      showClearBtn: false
    },
    searchResult: [],
    imgUrls :[
      'https://p.qpic.cn/qqconadmin/0/83f6decc2b9e4ea898dfbd644de88a36/0',
      'https://p.qpic.cn/qqconadmin/0/37d7d58946e848d79380dccfd45922b3/0?tp=webp',
      'https://p.qpic.cn/qqconadmin/0/8f63a7564f2e48b291e93f2228f21367/0?tp=webp',
      'https://p.qpic.cn/qqconadmin/0/f5bc8e5b736f4170a0a6f3adecb51cfa/0?tp=webp',
      'https://p.qpic.cn/qqconadmin/0/5bea5e5c8ee74bd095affcab3623c735/0?tp=webp',
      'https://p.qpic.cn/qqconadmin/0/c674e1831507435dadc6222f436e0b78/0?tp=webp',
      'https://p.qpic.cn/qqconadmin/0/69bbebda6ea54a33a9ccb873c0e0a76f/0?tp=webp',
      'https://p.qpic.cn/qqconadmin/0/8a2e904e96a4402f894c22da453c2fe5/0?tp=webp'
    ],
    contentItems:['','','',''],
    listItems:['','','','','','',''],
  
  },


  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['weappdev', '小程序', 'wxParse', 'wxSearch', 'wxNotification']);
    WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);
  },
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);
  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
 
})