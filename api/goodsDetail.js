//引入reuest请求
const { request } = require('../utils/request')

//基于业务封装的数据请求
module.exports = {
/**
* 列表数据方法
*/
getDetailMo: (param) => {
		return request('/goods/getDetailMo.shtml', 'POST', param, false);
	}
}