// pages/searchList/searchGoods/screemItem/screemItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemList: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal, changedPath) {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pitchOnList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pitchOn(e) {
      let id = e.currentTarget.dataset.select
      if(typeof(id) != 'number') {
        this.setData({
          pitchOnList: [id]
        })
      } else {
        let arr = this.data.pitchOnList
        let index = arr.indexOf(id)
        if(index!= -1) {
          arr.splice(index, 1)
        } else {
          arr.push(id)
        }
        this.setData({
          pitchOnList: arr
        })
      }
    }
  }
})
