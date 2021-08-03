// pages/classify/classifyRight/classifyRight.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rightClassData: Array
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
    goToDetail(e) {
      let key = e.currentTarget.dataset.title
      let threeCategory = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/searchList/searchGoods/searhGoods?searchkey=${key}&isShow=${true}&threeCategory=${threeCategory}`
      })
    }
  }
})
