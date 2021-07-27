// pages/variousRecom/variousRecom.js
import { searchGoods } from '../../api/searchList'
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heiPadding: App.globalData.navHeight,
    pageName: '',
    variImg: '',
    form: {
      name: '',
      strCount: '',
      endCount: '',
      strPrice: '',
      endPrice: '',
      brandId: '',
      countryId: '',
      deliveryType: '',
      topCategory: '',
      twoCategory: '',
      threeCategory: '',
      sort: '',
      order: '',
      ifSpecOfMall: '',
      couponPolicyId: '',
      couponId: '',
      ifDead: '',
      ifNew: '',
      ifDisCount: '',
      pageNum: 1,
      pageSize: 20
    },
    themeId: 450,
    goodsList:[],
    showBottom: false,
    showToTop: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getData() {
    let param = { ...this.data.form, themeId: this.data.themeId }
    searchGoods(param).then(res => {
      let list = res.data.result.list
      let _list = this.data.goodsList.concat(list)
      list.forEach(item => {
        switch (item.deliveryType) {
          case 1:
            return item.deliveryType = '保税区邮'
          case 2:
            return item.deliveryType = '香港直邮'
          case 4:
            return item.deliveryType = '海外直邮'
          case 5:
            return item.deliveryType = '国内发货'
          default:
            break;
        }
      })
      this.setData({
        goodsList: _list
      })
      if(list.length < 20) {
        this.setData({
          showBottom: true
        })
      }
    })
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      pageName: options.titleKey,
      variImg: options.img,
      themeId: options.id
    })
    this.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(!this.data.showBottom) {
      let i = this.data.form.pageNum
      this.setData({
        'form.pageNum': i + 1
      })
      this.getData()
    }
    
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})