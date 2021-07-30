// pages/brandStreet/brandStreet.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight,
    brandMap: {},
    hotBrandList: [],
    brandList: [],
    allDataBrand: {},
    count: 7,
    showLoad: true,
    mockImg: '../../image/mock-img.png',
    topHight: App.globalData.navHeight + 90
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let streetData = App.globalData.streetData
    let _brandList = [...Object.keys(streetData.brandMap)];
    let left1 = 'http://image.mihui365.com/bbc/brandImg/'
    let left2 = 'http://image.mihui365.com/brandImg/'
    let httpUrl = [
      '12596930142153524.jpg', 
      '12768388059622769.jpg', 
      '17914191923703847.jpg', 
      '23474438370401095.jpg', 
      '50347730060445544763409.jpg',
      '12595031428029026.jpg',
      '12580539936237830.jpg',
      '19063148470315086.jpg',
      '1621138716065335.jpg',
      '27541934138330485.jpg',
      '21042211658142241.jpg',
      '12592303504189482.jpg',
      '13042412133175607.jpg',
      '13768760753176097.png',
      '16685017800269750.png',
      '13039680155286241.png',
      '13264380710289430.jpg'
    ]
    _brandList.forEach(item => {
      streetData.brandMap[item].forEach(itm => {
        // 解决图片无地址问题
        if(itm.brandLogo == '') itm.brandLogo = this.data.mockImg
        // 解决图片地址报错问题
        if(httpUrl.findIndex(ite => itm.brandLogo == left1 + ite || itm.brandLogo == left2 + ite) != -1) itm.brandLogo = this.data.mockImg
      })
    })
    _brandList.unshift('热门品牌')
    this.setData({
      brandMap: streetData.brandMap,
      hotBrandList: streetData.hotBrandList,
      brandList: _brandList
    })
    setTimeout(() => {
      this.setData({
        showLoad: false
      })  
    }, 300);
  },
  // onPageScroll(e) {
  //   let count = this.data.count
  //   let _brandList = this.data.brandList
  //   let brandMap = this.data.allDataBrand
  //   let _brandMap = this.data.brandMap
  //   let obj = {}
  //   if(e.scrollTop > 1000 * count && e.scrollTop < 1000 * (count + 0.1)) {
  //     count++
  //     console.log(11111111, count);
  //     console.log(11111111, e.scrollTop);
  //     _brandList.forEach((item, index) => {
  //       if(index == count) obj[item] = brandMap[item]
  //     })
  //     let _brandMap1 = Object.assign(_brandMap, obj)
  //     this.setData({
  //       brandMap: _brandMap1,
  //       count: count
  //     })
  //   }
  // },

  onPageScroll(e) {
    // console.log(e.scrollTop);
  },
  goToItem(e) {
    let key = e.currentTarget.dataset.key
    var me = this;
    var query = wx.createSelectorQuery().in(me)
    query.selectViewport().scrollOffset()
    query.select(`#togo-${key}`).boundingClientRect()
    query.exec(function (res) {
      console.log(res);
      var miss = 0
      if(key == '#') miss = res[0].scrollHeight - App.globalData.navHeight - 3000
      else miss = res[0].scrollTop + res[1].top - 10 - App.globalData.navHeight - 50
      console.log(miss);
      wx.pageScrollTo({
        scrollTop: miss,
        duration: 300
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})