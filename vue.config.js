let path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    //设置别名
    config.resolve.alias
      .set('@', resolve('src'));
  },
  devServer: {
    open: true,  //打开浏览器窗口
    proxy: {
      '/api': {
        target: 'http://47.105.200.231:8084/server', //对应自己的接口
<<<<<<< HEAD
=======
        target: 'http://47.105.200.231:8084', 
>>>>>>> 01d66daa51779bb2d21cf693827f00de27712a90
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  //定义scss全局变量
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/global.scss";`
      }
    }
  }
}
