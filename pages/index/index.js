// index.js
// 获取应用实例
const { getHomeList } = require("../../api/home") 
const app = getApp()

Page({
  data: {
    bannerList: [],
    searchKey: ''
  },
  // 事件处理函数
  bindViewTap() {},
  onLoad() {
    getHomeList().then(res => {
      console.log(res.data);
      this.setData({
        bannerList: res.data.result.banner,
        searchKey: res.data.result.hotSearch
       })
    })
  },
  getUserProfile(e) {},
  getUserInfo(e) {}
})
