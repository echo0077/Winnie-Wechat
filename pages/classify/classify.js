// pages/classify/classify.js
const App = getApp();
const { getCategory, getCategoryTwo } = require("../../api/classify") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight,
    leftClassData: [],
    activeClass: 1,
    rightClassData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getCategory().then(res => {
      this.setData({
        leftClassData: res.data.result
      })
    })
    let param = { categoryId: 1 }
    getCategoryTwo(param).then(res => {
      console.log(res.data.result.classTwoList);
      this.setData({
        rightClassData: res.data.result.classTwoList
      })
    })
  },

  changeItem(e) {
    this.setData({
      rightClassData: []
    })
    let classid = e.currentTarget.dataset.classid
    let param = { categoryId: classid }
    getCategoryTwo(param).then(res => {
      this.setData({
        activeClass: classid,
        rightClassData: res.data.result.classTwoList
      })
    })
  },

  goSearch() {
    let hotSearch = '防晒'
    wx.navigateTo({
      url: '/pages/searchList/searchPage/searchPage?hotSearch=' + hotSearch
    })
  },
  goCart() {
    console.log('暂无');
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

  }
})