//引入reuest请求
const { request } = require('../utils/request')

//基于业务封装的数据请求
module.exports = {
/**
* 列表数据方法
*/
	getHomeList: ( ) => {
		return request('/indexMobileTop.shtml', 'POST', { }, false);
	},
	getHotSearch: ( ) => {
		return request('/find/getHotSearch.shtml', 'POST', { }, false);
	},
	indexHotList: ( ) => {
		return request('/indexHotList.shtml', 'POST', { }, false);
	},
}