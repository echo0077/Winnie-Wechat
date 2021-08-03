// pages/searchList/searchList.js
const App = getApp();
const { getHotSearch } = require("../../../api/home") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heiPadding: App.globalData.navHeight,
    hotSearch: '',
    hotSearchList: [],
    textSearch: []
  },
  getValue(e) {
    this.setData({
      hotSearch: e.detail.value
    })
  },
  clearValue() {
    this.setData({
      hotSearch: ''
    })
  },
  clearTextSearch() {
    let list = []
    wx.setStorageSync("searchData", list);
    this.setData({
      textSearch: []
    })
  },
  toSearchgoods(e) {
    let searchkey = e.currentTarget.dataset.searchkey
    let list = wx.getStorageSync("searchData", list);
    list.unshift(searchkey);
    list = Array.from(new Set(list))
    wx.setStorageSync("searchData", list);
    wx.navigateTo({
      url: '../searchGoods/searhGoods?searchkey=' + searchkey
    })
  },
  navBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getHotSearch().then(res => {
      this.setData({
        hotSearchList: res.data.result
      })
    })
    this.setData({
      hotSearch: options.hotSearch
    })
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
    let list = wx.getStorageSync("searchData", list);
    if(list == '') {
      let list = []
      wx.setStorageSync("searchData", list);
    }
    this.setData({
      textSearch: list
    })
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

  }
})