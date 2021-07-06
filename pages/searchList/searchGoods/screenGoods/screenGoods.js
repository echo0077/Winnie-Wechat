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
          for(let key in newVal) {
            newVal[key].forEach(item => {
              item.select = false
            })
          }
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
      let _arr = this.data.selectKeyList
      let obj = {title, key, name}
      //将选中的数据push到某个数组中，并根据不同的功能的不同进行切割
      if(title == '价格' || title == '库存' || title == '发货') {
        let index = _arr.findIndex((item) => item.title === title)
        if(index != -1) {
          let index_1 = _arr.findIndex((item) => item.key === key)
          if(index_1 != -1) {
            _arr.splice(index, 1)
          } else {
            _arr.splice(index, 1)
            _arr.push(obj)
          }
        } else {
          _arr.push(obj)
        }
      }else {
        if(_arr.length > 0) {
          let index = _arr.findIndex((item) => item.key === key)
          if(index != -1) {
            _arr.splice(index, 1)
          } else {
            _arr.push(obj)
          }
        } else{
          _arr.push(obj)
        }
      }
      // 将选中数据的数组与页面数据对比，设置select的值
      this.data.screenList.forEach(item => {
        item.list.forEach(itm => {
          if(_arr.findIndex((i) => itm.id === i.key) != -1) {
            itm.select = true
          } else {
            itm.select = false
          }
        })
      })
      // 拿到选择价格或者库存后的值并写入输入框内 start
      let strPrice = ''
      let endPrice = ''
      let strCount = ''
      let endCount = ''
      _arr.forEach(item => {
        if(item.title == '价格') {
          let list =  item.name.split('-')
          strPrice = list[0]
          endPrice = list[1]
        } else if(item.title == '库存') {
          if(item.name == '500以上') {
            strCount = '500'
            endCount = ''
          } else {
            let list =  item.name.split('-')
            strCount = list[0]
            endCount = list[1]
          }
        }
      })
       // 拿到选择价格或者库存后的值并写入输入框内 end
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
