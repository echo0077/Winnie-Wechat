// pages/searchList/goodsDetails/goodsDetails.js
const {
  getDetailMo
} = require("../../api/goodsDetail")
var addressList = require('../../components/address');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: {},
    isShowAddress: false,
    addressData: [],
    widheight: 0,
    addressObj: {
      pro: '广东省',
      city: '广州'
    },
    showToTop: false
  },
  showAddress(e) {
    this.setData({
      isShowAddress: e.detail
    })
  },
  hideShade() {
    this.setData({
      isShowAddress: false
    })
    this.selectComponent("#address-box").setData({
      showPro: true
    })
  },
  addressinfo(e) {
    this.setData({
      addressObj: e.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          widheight: res.screenHeight
        });
      }
    });
    let param = {goodsNo: options.goodsNo || 'MIS3311'}
    getDetailMo(param).then(res => {
      this.setData({
        detailList: res.data.result,
        addressData: addressList.data
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