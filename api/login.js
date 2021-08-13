//引入reuest请求
const { request } = require('../utils/request')

//基于业务封装的数据请求
module.exports = {
/**
* 列表数据方法
*/
  checkUser: () => {
		return request('/user/checkUser.shtml', 'POST', {}, false);
	},
  getpublickey: () => {
		return request('/user/getpublickey.shtml', 'POST', {}, false);
	},
  login: (params) => {
		return request('/user/login.shtml', 'POST', params, false);
	},
  sendMoRandmoCode: (params) => {
		return request('/user/sendMoRandmoCode.shtml', 'POST', params, false);
	},
  userRegister: (params) => {
		return request('/user/userRegister.shtml', 'POST', params, false);
	},
}