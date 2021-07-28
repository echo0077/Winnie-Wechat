// components/goodList/goodLists.js
Component({
  options: {
    // 这个配置决定是否由 `app.wxss` 和页面 `wxss` 中的样式定义来决定
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList: {
      type: Array,
      value: []
    },
    showBottom: {
      type: Boolean,
      value: false
    },
    isHome: {
      type: Boolean
    },
    navHeight: {
      type: Number
    },
    isNew: {
      type: Boolean
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
      wx.navigateTo({
        url: '/pages/goodsDetails/goodsDetails?goodsNo=' + goodsId
      })
    },
  }
})
