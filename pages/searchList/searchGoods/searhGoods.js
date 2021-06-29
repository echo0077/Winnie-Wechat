// pages/searchList/searchGoods/searhGoods.js

const {
  searchGoods,
  getSolrGroup
} = require("../../../api/searchList")
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    }, ],
    goodsList: [],
    goodsTotal: 0,
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
    // 筛选数据 
    isShowScreen: false,
    screenData: {}
  },

  getData(key, name, _order) {
    console.log(key, name, _order);
    let data = this.data.searchGoodsData
    if(key == 'data' && name == 'bottom') {
      data.pageNum = data.pageNum + 1
    }
    if(key == 'click' && name != 'sx') {
      data.sort = name
      data.order = _order
    }
    let param = {
      strCount: data.strCount,
      endCount: data.endCount,
      strPrice: data.strPrice,
      endPrice: data.endPrice,
      brandId: data.brandId,
      countryId: data.countryId,
      deliveryType: data.deliveryType,
      topCategory: data.topCategory,
      twoCategory: data.twoCategory,
      threeCategory: data.threeCategory,
      sort: data.sort,
      order: data.order,
      ifSpecOfMall: data.ifSpecOfMall,
      couponPolicyId: data.couponPolicyId,
      couponId: data.couponId,
      themeId: data.themeId,
      ifDead: data.ifDead,
      ifNew: data.ifNew,
      ifDisCount: data.ifDisCount,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      name: this.data.searchkey
    }
    if(name != 'sx') {
      let _list = []
      searchGoods(param).then(res => {
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
        if(key == 'data') {
          _list = this.data.goodsList.concat(list)
        } else {
          _list = list
        }
        this.setData({
          goodsList: _list,
          'searchGoodsData.pageNum': res.data.result.pageNum,
          goodsTotal: res.data.result.total
        })
      })
    } else {
      getSolrGroup(param).then(res => {
        console.log(res.data.result);
        this.setData({
          screenData: res.data.result
        })
      })
    }
  },
  golastPage() {
    wx.navigateTo({
      url: '../searchPage/searchPage?hotSearch=' + this.data.searchkey
    })
  },
  clickUp(e) {
    let titlename = e.target.dataset.titlename
    this.getData('click', titlename, '1')
    this.setData({
      changeColor: titlename,
      upColor: true,
      downColor: false
    })
  },
  clickDown(e) {
    let titlename = e.target.dataset.titlename
    this.getData('click', titlename, '2')
    this.setData({
      changeColor: titlename,
      downColor: true,
      upColor: false
    })
    if(titlename == 'sx') {
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
  clickShow() {
    console.log(8888888);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchkey: options.searchkey
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getData('data', 'init', '')
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.goodsList.length < this.data.goodsTotal) {
      this.getData('data', 'bottom', '')
    } else if (this.data.goodsTotal != 0) {
      this.setData({
        showBottom: true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})