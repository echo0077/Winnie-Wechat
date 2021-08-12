// pages/mine/login/login.js
import md5 from '../../../utils/md5'
// import '../../../utils/RSAUtils'
import { getpublickey } from '../../../api/login'
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

    },
    loginTo() {
      let phone = this.data.phone
      let password = this.data.password
      getpublickey().then(res => {
        console.log(res.data.result);
        // let i = RSAUtils.getKeyPair(res.data.result.exponent, "", res.data.result.modulus)
        // console.log(i);
      })
      
      console.log(password);
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
