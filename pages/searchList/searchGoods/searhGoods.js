// pages/searchList/searchGoods/searhGoods.js
const App = getApp();
const {
  searchGoods,
  getSolrGroup
} = require("../../../api/searchList")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heiPadding: App.globalData.navHeight,
    searchkey: '',
    listTitle: [{
      key: '销量',
      showIcon: false,
      nameCode: 'xl'
    }, {
      key: '价格',
      showIcon: true,
      nameCode: 'sj'
    }, {
      key: '库存量',
      showIcon: true,
      nameCode: 'kcl'
    }, {
      key: '上架时间',
      showIcon: true,
      nameCode: 'sjsj'
    }, {
      key: '筛选',
      showIcon: false,
      nameCode: 'sx'
    }],
    goodsList: [],
    goodsTotal: 0,
    upAndDown: false,
    showBottom: false,
    upColor: false,
    downColor: false,
    changeColor: '',
    searchGoodsData: {
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
      themeId: '',
      ifDead: '',
      ifNew: '',
      ifDisCount: '',
      pageNum: 1,
      pageSize: 20
    },
    isNew: false,
    // 筛选数据 
    isShowScreen: false,
    screenData: {},
    screenOldData: {},
    showToTop: false,
    navHeight: App.globalData.navHeight + 92,
    ifNew: '',
    titleKey: '',
    brandId: '',
    noDataImg: '/image/no-data.jpg',
    noData: false
  },

/**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    if (this.data.goodsList.length < this.data.goodsTotal) {
      let param = this.getParam()
      param.pageNum = param.pageNum + 1
      this.getData(param)
    } else if (this.data.goodsTotal != 0) {
      this.setData({
        showBottom: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let param = this.getParam()
    this.getData(param)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.isShow) {
      if(options.searchkey == '新品') {
        this.setData({
          isNew: true,
          navHeight: App.globalData.navHeight + 58,
          ifNew: '1',
          titleKey: options.searchkey
        })
      } else {
        this.setData({
          isNew: true,
          navHeight: App.globalData.navHeight + 58,
          titleKey: options.searchkey,
          brandId: options.brandId
        })
      }
    } else {
      this.setData({
        searchkey: options.searchkey || '防晒'
      })
    }
    let param = this.getParam()
    getSolrGroup(param).then(res => {
      this.setData({
        screenData: res.data.result,
        screenOldData: res.data.result
      })
    })
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
   * 页面方法
   */
  getParam() {
    let data = this.data.searchGoodsData
    let param = { ...data, name: this.data.searchkey, ifNew: this.data.ifNew, brandId: this.data.brandId }
    return param
  },
  getData(param) {
    searchGoods(param).then(res => {
      if(res.data.result.hasOwnProperty('list')) {
        let list = res.data.result.list
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
        let _list = this.data.goodsList.concat(list)
        this.setData({
          goodsList: _list,
          'searchGoodsData.pageNum': res.data.result.pageNum,
          goodsTotal: res.data.result.total
        })
      } else {
        this.setData({
          noData: true
        })
      }
    })
  },
  golastPage() {
    wx.navigateTo({
      url: '../searchPage/searchPage?hotSearch=' + this.data.searchkey
    })
  },
  upAndDown(e) {
    let upAndDown = this.data.upAndDown
    let name = e.currentTarget.dataset.titlename
    if(name != 'sx') { // 排除筛选直接请求数据
      let param = this.getParam()
      param.sort = name
      if(name != 'xl' && this.data.changeColor == name) { // 排除销量改变upAndDown的值
        upAndDown = !upAndDown
      } else {
        upAndDown = false
      }
      param.order = upAndDown ? 2 : 1
      this.setData({
        upAndDown: upAndDown,
        changeColor: name,
        goodsList: []
      })
      this.getData(param)
    } else {
      this.setData({
        isShowScreen: true
      })
    }
  },
   // 筛选数据页面的方法
  clickShade() {
    this.setData({
      isShowScreen: false
    })
  },
  screenInfo(e){
    let list = e.detail
    let obj = Object.assign(this.data.searchGoodsData, list)
    this.setData({
      searchGoodsData: obj,
      isShowScreen: list.key,
      goodsList: []
    }, function(){
      let param = this.getParam()
      this.getData(param)
      if(list.key) {
        let screenOldData = this.data.screenOldData
        this.setData({
          screenData: screenOldData
        })
      } else {
        getSolrGroup(param).then(res => {
          this.setData({
            screenData: res.data.result
          })
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  
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