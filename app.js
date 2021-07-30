// app.js
import { queryBrandList } from "./api/home";
App({
  globalData: {
    navHeight: 0,
    navTop: 0,
    windowHeight: 0,
    streetData: {}
  },
  onLaunch: function () {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
    let param = {brandName: ''}
    queryBrandList(param).then(res => {
      this.globalData.streetData = res.data.result
    })
  }
})
