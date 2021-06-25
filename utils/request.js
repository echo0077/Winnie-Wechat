//引入env中的url
const { baseUrl } = require('../env').prod

//专用域名
const SubDomain = 'xxx'

module.exports = {

//二次封装wx.request
//url:请求接口的地址//
// methode:请求方式 GET POST
//data:要传递的参数
//isSubdomain:表示是否添加二级子域名

		request: (url, method, data, isSubDomain) => {
			// console.log('这是我的ajax请求', baseUrl);
			let _url = `${baseUrl}/${isSubDomain ? SubDomain : ''}${url}`;
    		// console.log(_url)
    	
    		return new Promise((resolve, reject) => {
      			wx.showLoading({
       		 	title: '加载中'
      		})

      		wx.request({
        		url: _url,
        		data: data,
        		method: method,
        		header: {
          			'content-type': 'application/x-www-form-urlencoded'
       			},
       			success(res) {
         			// console.log(res)
          			resolve(res)
          			wx.hideLoading()
       			 },
        		fail() {
          			reject('接口请求错误')
        		}
      		})
    	})
   	},
}