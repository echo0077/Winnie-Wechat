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
          newVal.groupList3.forEach(item => {
            item.select = false
          })
          newVal.groupList1.forEach(item => {
            item.select = false
          })
          newVal.groupList2.forEach(item => {
            item.select = false
          })
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
      {
        title: '价格',
        list: [
          {name: '0-99', select: false, id: '001'},
          {name: '100-199', select: false, id: '002'},
          {name: '200-299', select: false, id: '003'}
        ]
      },
      {
        title: '库存',
        list: [
          {name: '0-99', select: false, id: '004'},
          {name: '100-499', select: false, id: '005'},
          {name: '500以上', select: false, id: '006'}
        ]
      },
      {
        title: '发货',
        list: [
          {name: '保税区邮', select: false, id: '007'},
          {name: '香港直邮', select: false, id: '008'},
          {name: '海外直邮', select: false, id: '009'},
          {name: '国内发货', select: false, id: '010'}
        ]
      }
    ],
    showORhide: false,
    showType: '',
    selectData: false,
    selectKeyList: [],
    strPrice: '',
    endPrice: '',
    strCount: '',
    endCount: ''
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
    pitchOn(e) {
      let key = e.currentTarget.dataset.select
      let title = e.currentTarget.dataset.title
      let name = e.currentTarget.dataset.name
      let strPrice = ''
      let endPrice = ''
      let strCount = ''
      let endCount = ''
      if(title == '价格' || title == '库存') {
        let list = name.split('-')
        if(title == '价格') {
          strPrice = list[0]
          endPrice = list[1]
        } else {
          strCount = name == '500以上' ? '500' : list[0]
          endCount = list[1]
        }
      }
      let _arr = this.data.selectKeyList
      if(_arr.length > 0) {
        if(_arr.findIndex((item) => item === key) != -1) {
          _arr.splice(index, 1)
        } else {
          _arr.push(key)
        }
      } else{
        _arr.push(key)
      }
      this.data.screenList.forEach(item => {
        item.list.forEach(itm => {
          if(_arr.findIndex((i) => itm.id === i) != -1) {
            itm.select = true
          } else {
            itm.select = false
          }
        })
      })
      let arr = this.data.screenList
      this.setData({
        screenList: arr,
        selectKeyList: _arr,
        strPrice: strPrice,
        endPrice: endPrice,
        strCount: strCount,
        endCount: endCount,
      })
    }
  }
})
