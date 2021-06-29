// pages/searchList/searchPage/screenGoods/screenGoods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    screenData: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal, changedPath) {
        console.log(newVal, oldVal);
        this.setData({
          'screenList[0].list': newVal.groupList3,
          'screenList[1].list': newVal.groupList1,
          'screenList[2].list': newVal.groupList2
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    screenList: [
      {
        title: '分类',
        list: []
      },
      {
        title: '品牌',
        list: []
      },
      {
        title: '国家',
        list: []
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBeforeEnter(res) {
      console.log(res)
    },
    onEnter(res) {
      console.log(res)
    },
    onAfterEnter(res) {
      console.log(res)
    },
    onBeforeLeave(res) {
      console.log(res)
    },
    onLeave(res) {
      console.log(res)
    },
    onAfterLeave(res) {
      console.log(res)
    },
  }
})
