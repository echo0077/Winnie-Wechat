// pages/mine/login/login.js
import md5 from '../../../utils/md5'
import '../../../utils/RSAUtils'
import { getpublickey, login } from '../../../api/login'
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
    checkPhone(e){
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
    getPass(e) {
      this.setData({
        password: e.detail.value
      })
    },
    loginWeibo() {
      wx.showToast({
        title: '还未开发！',
        icon: 'none',
        duration: 2000
      })
    },
    loginTo() {
      let phone = this.data.phone
      let password = this.data.password
      if(phone && password) {
        this.encryption(password).then(revert => {
          if(revert) {
            let params = { mobile: phone, password: revert, type: 1 }
            login(params).then(res => {
              if(res.data.success) {
                wx.switchTab({
                  url: '/pages/index/index',
                })
              } else {
                wx.showToast({
                  title: res.data.msg,
                  icon: 'none',
                  duration: 2000
                })
              }
            })
          }
        })
      }
    },
    encryption(password) {
      return new Promise((resolve, rejects) => {
        getpublickey().then(res => {
          let i = wx.RSAUtils.getKeyPair(res.data.result.exponent, "", res.data.result.modulus)
          let re_password = wx.RSAUtils.encryptedString(i, md5(password), wx.RSAUtils.NoPadding) 
          resolve(re_password)
        })
      })
    },
    toRegist() {
      wx.navigateTo({
        url: '/pages/login/regist/regist'
      })
    },
    forgetPass() {
      wx.navigateTo({
        url: '/pages/login/forgetPass/forgetPass'
      })
    }
  }
})
