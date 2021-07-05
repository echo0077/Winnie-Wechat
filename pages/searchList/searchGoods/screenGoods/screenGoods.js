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
      {
        title: '价格',
        list: [{name: '0-99'},{name: '100-199'},{name: '200-299'}]
      },
      {
        title: '库存',
        list: [{name: '0-99'},{name: '100-499'},{name: '500以上'}]
      },
      {
        title: '发货',
        list: [{name: '保税区邮'},{name: '香港直邮'},{name: '海外直邮'},{name: '国内发货'},]
      }
    ],
    showORhide: false,
    showType: '',
    selectData: false,
    selectKeyList: [],
    selectKey: ''
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
      this.data.screenList.forEach(item => {
        item.list.forEach(itm => {
          if(itm.name == key) {
            itm.select = true
          }
        })
      })
      console.log(this.data.screenList);
      // console.log(key);
      // let arr = this.data.selectKeyList
      // if(this.data.selectKey == key) {
      //   console.log(111);
      //   this.setData({
      //     selectKey: key,
      //     selectKeyList: arr,
      //     selectData: !this.data.selectData
      //   })
      // } else {
      //   console.log(222);
      //   arr.push(key)
      //   this.setData({
      //     selectKey: key,
      //     selectKeyList: arr,
      //     selectData: true
      //   })
      // }
      
    }
  }
})
