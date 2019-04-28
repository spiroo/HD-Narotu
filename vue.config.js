let path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    //设置别名
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    open: true, //打开浏览器窗口
    proxy: {
      "/api": {
        target: "http://47.105.200.231:8084/server", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/test": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/test": ""
        }
      },
      '/test': {
        target: 'http://jsonplaceholder.typicode.com', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/test': ''
        }
      },
      '/test': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/test': ''
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
};
