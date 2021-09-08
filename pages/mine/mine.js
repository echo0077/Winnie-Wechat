// pages/mine/mine.js
import { getNotice } from '../../api/mine'
const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight,
    userName: '',
    noticeList:[],
    myOperate: [
      {icon: 'zhifuqianbao', text: '待付款', key: 'toPay'},
      {icon: 'daifahuo', text: '待发货', key: 'toShip'},
      {icon: 'daishouhuo', text: '待收货', key: 'toReceive'},
      {icon: 'yiwancheng', text: '已完成', key: 'complete'},
      {icon: 'shouhou', text: '售后', key: 'sale'}
    ],
    myFunct: [
      {icon: 'youhuiquan', text: '我的优惠券', rightText: '查看所有优惠卷', key: 'myCoupon'},
      {icon: 'self', text: '实名认证', rightText: '', key: 'self'},
      {icon: 'shoucang', text: '我的收藏', rightText: '', key: 'myCollect'},
      {icon: 'shiyongbangzhu', text: '使用帮助', rightText: '', key: 'help'},
      {icon: 'kefu', text: '联系客服', rightText: '', key: 'customer'}
    ]
  },

  goNotice() {
    
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
    let nickName = wx.getStorageSync("nickName");
    if(!nickName) {
      wx.navigateTo({
        url: `/pages/login/index`
      })
    } else {
      getNotice().then(res => {
        if(res.data.success) {
          this.setData({
            nickName: nickName,
            noticeList: res.data.result
          })
        }
      })
      
    }
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