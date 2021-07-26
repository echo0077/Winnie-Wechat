// components/goTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showToTop: {
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
    gotoTop(e) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})
