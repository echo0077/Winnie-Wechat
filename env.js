//设置公共访问的url.即环境地址

//commonJS规范--node.js采用的就是该规范  引入：require
module.exports={
  //开发环境
dev:{
  baseUrl:'http://www.weinihaigou.com'   //例子
  },
  //测试环境
  test:{
  baseUrl:'http://www.test.com'  //例子
  },
  //线上环境（公共部分）
  prod:{
  baseUrl:'http://www.weinihaigou.com'
  }
}

//ES6  module --Vue中通常采用ES6的模块化规范  引入：import2.