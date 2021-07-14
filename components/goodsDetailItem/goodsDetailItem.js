// components/goodsDetails/goodsDetails.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailList: {
      type: Object,
      value: [],
      observer: function (newVal, oldVal, changedPath) {
        if(newVal.hasOwnProperty('imgList')) {
          console.log(newVal);
          let carouselImg = this.data.carouselImg
          let detailImg = this.data.detailImg
          newVal.imgList.forEach(item => {
            if(item.type == 1) {
              carouselImg.push(item)
            } else {
              detailImg.push(item)
            }
          })
          this.setData({
            carouselImg: carouselImg,
            detailImg: detailImg,
            goods: newVal.goods
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorActive: '#9f2e33',
    carouselImg: [],
    detailImg: [],
    goods: {},
    goodsPrams: ['商品税费', '该商品免运费', '100%正品保证', '假一赔十']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack() {
      let route = wx.getStorageSync("lastRoute");
      console.log(route);
      wx.redirectTo({
        url: '../../searchList/searchGoods/searhGoods'
      })
  }
  }
})
