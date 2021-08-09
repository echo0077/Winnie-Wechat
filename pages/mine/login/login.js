// pages/mine/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    phone: '',
    password: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loginWeibo() {

    },
    loginTo() {
      let phone = this.data.phone
      let password = this.data.password
      if(!phone&&!password || !password || !phone) {
        wx.showToast({
          icon: 'error',
          title: '手机号为空或者格式不正确！',
          duration: 2000
      })
      }
    }
  }
})
