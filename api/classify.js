//引入reuest请求
const { request } = require('../utils/request')

//基于业务封装的数据请求
module.exports = {
/**
* 列表数据方法
*/
  getCategory: () => {
		return request('/category/getCategory.shtml', 'POST', {}, false);
	},
  getCategoryTwo: (param) => {
		return request('/category/getCategoryTwo.shtml', 'POST', param, false);
	}
}