// pages/index/banner/banner.js
const App = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataBanner: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    searchKey: {
      type: String,
      value: '',
      observer: function (newVal, oldVal, changedPath) {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    heiPadding: App.globalData.navHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    focuInput(e) {
      let hotSearch = e.currentTarget.dataset.current
      wx.navigateTo({
        url: '../searchList/searchPage/searchPage?hotSearch=' + hotSearch
      })
    }
  }
})
