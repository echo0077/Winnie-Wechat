// index.js
// 获取应用实例
const { getHomeList } = require("../../api/home") 
const app = getApp()

Page({
  data: {
    bannerList: [],
    searchKey: '',
    homeNarList: [
      {
        title: '国家馆',
        img: '../../image/homeNav/nav2.png'
      },
      {
        title: '品牌街',
        img: '../../image/homeNav/nav3.png'
      },
      {
        title: '新品',
        img: '../../image/homeNav/new.png'
      },
      {
        title: '热卖',
        img: '../../image/homeNav/hot.png'
      },
    ]
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
