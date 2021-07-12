// components/goodList/goodLists.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal, changedPath) {}
    },
    showBottom: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal, changedPath) {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(e) {
      let goodsId = e.currentTarget.dataset.goodsno
      wx.redirectTo({
        url: '../goodsDetails/goodsDetails?goodsNo=' + goodsId
      })
    },
  }
})
