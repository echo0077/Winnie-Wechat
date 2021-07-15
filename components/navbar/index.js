// components/navbar/index.js
const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageName:String,
    showNav:{
      type:Boolean,
      value:true
    },
    bgColor:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: 0 || App.globalData.navHeight,
    navTop: 0 || App.globalData.navTop,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    navBack() {
      wx.navigateBack({
        delta: 1
      })      
    },
    //回主页
    toIndex() {
      wx.navigateTo({
        url: '/pages/index/index'
      })
    },
  }
})
