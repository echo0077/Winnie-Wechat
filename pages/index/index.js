// index.js
// 获取应用实例
const { getHomeList, indexHotList } = require("../../api/home") 
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
    ],
    specialList: [],
    newSubject: [],
    goodsList: [],
    showBottom: false,
    showToTop: false
  },
  // 事件处理函数
  bindViewTap() {},
  onLoad() {
    getHomeList().then(res => {
      console.log(res.data.result.newSubject);
      this.setData({
        bannerList: res.data.result.banner,
        searchKey: res.data.result.hotSearch,
        newSubject: res.data.result.newSubject,
        specialList: res.data.result.subject
       })
    })
    indexHotList().then(res => {
      res.data.result.forEach(item => {
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
        goodsList: res.data.result,
        showBottom: true
      })
    })
  },
  getUserProfile(e) {},
  getUserInfo(e) {},
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
  }
})
