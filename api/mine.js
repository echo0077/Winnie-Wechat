//引入reuest请求
const { request } = require('../utils/request')

//基于业务封装的数据请求
module.exports = {
/**
* 列表数据方法
*/
  getNotice: () => {
		return request('/active/getNotice.shtml', 'POST', {}, false);
	},
}