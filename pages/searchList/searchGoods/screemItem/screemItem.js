// pages/searchList/searchGoods/screemItem/screemItem.js
Component({
  options: {
    // 这个配置决定是否由 `app.wxss` 和页面 `wxss` 中的样式定义来决定
    addGlobalClass: true,
  },
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
        let arr = this.data.pitchOnList
        let index = arr.indexOf(id)
        if(index!= -1) {
          arr.splice(index, 1)
        } else {
          arr = [id]
        }
        this.setData({
          pitchOnList: arr
        })
        if(id.indexOf('-') != -1) {
          let list = []
          if(arr.length > 0) {
            list = id.split('-')
          }
          this.triggerEvent('addInfo', list)
        }
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
