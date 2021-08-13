// pages/mine/regist/regist.js
const App = getApp();
import { sendMoRandmoCode, userRegister } from '../../../api/login'

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
    navHeight: App.globalData.navHeight,
    password: '',
    phone: '',
    isShowPass: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkPhone(e) {
      let phone = e.detail.value
      if(!(/^1[3456789]\d{9}$/.test(phone))) {
        wx.showToast({
          title: '手机号格式不正确！',
          icon: 'none',
          duration: 2000
        })
      } else {
        this.setData({
          phone: phone
        })
      }
    },
    getInfo(e) {
      this.setData({
        password: e.detail.value
      })
    },
    showPass() {
      let showWho = this.data.isShowPass
      this.setData({
        isShowPass: !showWho
      })
    },
    getSmsCode() {
      let phone = this.data.phone
      if(phone) {
        let params = { mobile: phone, type: 2 }
        sendMoRandmoCode(params).then(res => {
          if(res.success) {
            wx.showToast({
              title: '验证码已发送，请查收！',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }
        })
      } else {
        wx.showToast({
          title: '手机号格式不正确！',
          icon: 'none',
          duration: 2000
        })
      }
    },
    toLogin() {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
