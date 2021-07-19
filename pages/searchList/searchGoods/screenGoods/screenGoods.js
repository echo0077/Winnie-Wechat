// pages/searchList/searchPage/screenGoods/screenGoods.js
const App = getApp();
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
        key: 'Price',
        list: [
          {name: '0-99', id: '0-99'},
          {name: '100-199', id: '100-199'},
          {name: '200-299', id: '200-299'}
        ]
      },
      {
        title: '库存',
        key: 'Count',
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
    },
    heiPadding: App.globalData.navHeight
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
    getReserve(val) {
      if(val.detail.length > 0) {
        let str = val.detail[0]
        let end = val.detail[1]
        let key = val.currentTarget.id
        let obj = this.data.priceAndCount
        obj = {...obj, ['str' + key]: str, ['end' + key]: end}
        this.setData({
          priceAndCount: obj
        })
      }
    },
    handleReset() {
      let list = ['threeCategory','brandId','countryId','deliveryType','Price','Count']
      list.forEach(item => {
        this.selectComponent(`#${item}`).setData({
          pitchOnList: []
        })
      })
      this.setData({
        priceAndCount: {
          strCount: '',
          endCount: '',
          strPrice: '',
          endPrice: '',
        }
      })
      let priceAndCount = this.data.priceAndCount
      let sureObj = { threeCategory: '', brandId: '', countryId: '', deliveryType: '', priceAndCount, key: true }
      this.triggerEvent('sureInfo', sureObj)
    },
    sure() {
      let list = ['threeCategory','brandId','countryId','deliveryType']
      let arr = []
      list.forEach(item => {
        arr.push(this.selectComponent(`#${item}`).data.pitchOnList.join(','))
      })
      let priceAndCount = this.data.priceAndCount
      let sureObj = { threeCategory: arr[0], brandId: arr[1], countryId: arr[2], deliveryType: arr[3], priceAndCount, key: false }
      this.triggerEvent('sureInfo', sureObj)
    }
  }
})
