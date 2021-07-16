// pages/goodsDetails/goodsDetailItem/productDescrip/productDescrip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showMsg: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    goodsMsgData: [
      {
        title: '商品税费',
        msg: '商家承担'
      },
      {
        title: '商品运费',
        msg: '该商品免运费'
      },
      {
        title: '正品保障',
        msg: '唯妮海购每一件商品都经过严苛的品质把关，100%正品保证'
      },
      {
        title: '假一赔十',
        msg: '杜绝一切假货，让您无忧购物。'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isHidewMsg() {
      this.triggerEvent('getMsg', false)
    }
  }
})
