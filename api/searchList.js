//引入reuest请求
const { request } = require('../utils/request')

//基于业务封装的数据请求
module.exports = {
/**
* 列表数据方法
*/
	searchGoods: (param) => {
		return request('/solr/searchGoods.shtml', 'POST', param, false);
	},
	getSolrGroup: (param) => {
		return request('/solrGoods/getSolrGroup.shtml', 'POST', param, false);
	}
}