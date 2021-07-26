// pages/index/goodsGather/goodsGather.js
Component({
  options: {
    // 这个配置决定是否由 `app.wxss` 和页面 `wxss` 中的样式定义来决定
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    newSubject: {
      type: Array,
      value: []
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
    lookMore(e) {
      console.log(e.currentTarget.dataset.title);
      let titleKey = e.currentTarget.dataset.title
      let imgKey = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/variousRecom/variousRecom?titleKey= ${titleKey}&img=${imgKey}`
      })
    },
  }
})
