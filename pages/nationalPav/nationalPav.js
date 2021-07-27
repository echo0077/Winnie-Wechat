// pages/nationalPav/nationalPav.js
import { queryCountryList } from '../../api/home'
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heiPadding: App.globalData.navHeight,
    newSubject: [],
    showToTop: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    queryCountryList().then(res => {
      this.setData({
        newSubject: res.data.result
      })
    })
  },

  onPageScroll(e) {
    if(e.scrollTop > 300) {
      this.setData({
        showToTop: true
      })
    } else {
      this.setData({
        showToTop: false
      })
    }
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