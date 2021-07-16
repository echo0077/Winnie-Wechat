// components/goodsDetails/goodsDetails.js
const App = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailList: {
      type: Object,
      value: [],
      observer: function (newVal, oldVal, changedPath) {
        if(newVal.hasOwnProperty('imgList')) {
          let carouselImg = this.data.carouselImg
          let detailImg = this.data.detailImg
          newVal.imgList.forEach(item => {
            if(item.type == 1) {
              carouselImg.push(item)
            } else {
              detailImg.push(item)
            }
          })
          this.setData({
            carouselImg: carouselImg,
            detailImg: detailImg,
            goods: newVal.goods
          })
        }
      }
    },
    addressObj: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    heiPadding: App.globalData.navHeight,
    indicatorActive: '#9f2e33',
    carouselImg: [],
    detailImg: [],
    goods: {},
    goodsPrams: ['商品税费', '该商品免运费', '100%正品保证', '假一赔十'],
    showAddress: false,
    addressObj: {},
    showMsg: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getAddress() {
      this.setData({
        showAddress: true
      })
      this.triggerEvent('getAddress', this.data.showAddress)
    },
    goHome() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    goToLook() {
      let searchkey = this.data.goods.goodsBrand.brandName
      console.log(searchkey);
      wx.navigateTo({
        url: '../searchList/searchGoods/searhGoods?searchkey=' + searchkey
      })
    },
    isShowMsg() {
      this.setData({
        showMsg: true
      })
    },
    isHidewMsg() {
      this.setData({
        showMsg: false
      })
    },
    showMsg(e) {
      this.setData({
        showMsg: e.detail
      })
    }
  }
})
