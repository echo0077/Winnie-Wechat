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
        if(newVal.hasOwnProperty('groupList1')) {
          this.setData({
            'screenList[0].list': newVal.groupList3,
            'screenList[1].list': newVal.groupList1,
            'screenList[2].list': newVal.groupList2
          })
        }
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
        key: 'threeCategory',
        list: []
      },
      {
        title: '品牌',
        key: 'brandId',
        list: []
      },
      {
        title: '国家',
        key: 'countryId',
        list: []
      },
      {
        title: '价格',
        key: 'price',
        list: [
          {name: '0-99', id: '0-99'},
          {name: '100-199', id: '100-199'},
          {name: '200-299', id: '200-299'}
        ]
      },
      {
        title: '库存',
        key: 'count',
        list: [
          {name: '0-99', id: '0-99'},
          {name: '100-499', id: '100-499'},
          {name: '500以上', id: '500-'}
        ]
      },
      {
        title: '发货',
        key: 'deliveryType',
        list: [
          {name: '保税区邮', id: '1'},
          {name: '香港直邮', id: '2'},
          {name: '海外直邮', id: '4'},
          {name: '国内发货', id: '5'}
        ]
      }
    ],
    showORhide: false,
    showType: '',
    priceAndCount: {
      strPrice: '',
      endPrice: '',
      strCount: '',
      endCount: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ishideList(e) {
      let type = e.currentTarget.dataset.type
      this.setData({
        showORhide: true,
        showType: type
      })
    },
    isshowList(e) {
      this.setData({
        showORhide: false
      })
    },
    price(val) {
      let strPrice = val.detail.length > 0 ? val.detail[0] : ''
      let endPrice = val.detail.length > 0 ? val.detail[1] : ''
      this.setData({
        'priceAndCount.strPrice': strPrice,
        'priceAndCount.endPrice': endPrice
      })
    },
    count(val) {
      let strCount = val.detail.length > 0 ? val.detail[0] : ''
      let endCount = val.detail.length > 0 ? val.detail[1] : ''
      this.setData({
        'priceAndCount.strCount': strCount,
        'priceAndCount.endCount': endCount
      })
    },
    handleReset() {
      let list = ['threeCategory','brandId','countryId','deliveryType','price','count']
      list.forEach(item => {
        this.selectComponent(`#${item}`).setData({
          pitchOnList: []
        })
      })
      this.setData({
        'priceAndCount.strPrice': '',
        'priceAndCount.endPrice': '',
        'priceAndCount.strCount': '',
        'priceAndCount.endCount': ''
      })
    },
    sure() {
      let list = ['threeCategory','brandId','countryId','deliveryType']
      let arr = []
      list.forEach(item => {
        arr.push(this.selectComponent(`#${item}`).data.pitchOnList.join(','))
      })
      let priceAndCount = this.data.priceAndCount
      let sureObj = { threeCategory: arr[0], brandId: arr[1], countryId: arr[2], deliveryType: arr[3], priceAndCount }
      this.triggerEvent('sureInfo', sureObj)
      this.handleReset()
    }
  }
})
