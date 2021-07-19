// pages/goodsDetails/shopAddress/shopAddress.js
const App = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showAddress: {
      type: Boolean
    },
    addressList: {
      type: Array,
      observer: function (newVal, oldVal, changedPath) {
        if(newVal.length > 0) {
          this.setData({
            addressData: newVal
          })
        }
      }
    },
    widheight: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    heiPadding: App.globalData.navHeight,
    addressData: [],
    showPro: true,
    addressPro: '',
    addressCity: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack() {
      this.setData({
        showPro: true
      })
    },
    showCity(e) {
      let key = e.target.dataset.pro
      let arr = this.data.addressData
      arr.forEach(item => {
        if(item.pro == key) {
          this.setData({
            addressCity: item.city,
            addressPro: key,
            showPro: false
          })
        }
      })
    },
    sureAddress(e) {
      let city = e.target.dataset.city
      let obj = {'pro': this.data.addressPro, 'city': city}
      this.triggerEvent('addressInfo', obj)
      this.triggerEvent('getAddress', false)
      this.setData({
        showPro: true
      })
    }
  }
})
