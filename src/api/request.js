import axios from "axios";
import router from "@/router/index";
import { messages } from "@/utils/common";
import { Loading } from "element-ui";
<<<<<<< HEAD
import store from "../store/index"; // 引入 vuex
=======
import store from "../store/index"; // 引入vuex
>>>>>>> 01d66daa51779bb2d21cf693827f00de27712a90

axios.defaults.timeout = 60000; // 设置接口超时时间
axios.defaults.baseURL = "/"; // 根据环境设置基础路径
// axios.defaults.headers.post["Content-Type"] =
//     "application/json;charset=UTF-8";  // 设置编码
let loading = null; // 初始化loading

/*
 * 请求前拦截
 * 用于处理需要请求前的操作
 */
axios.interceptors.request.use(
  config => {
    loading = Loading.service({
      text: "正在加载中......",
      fullscreen: true
    });
    if (store.state.token) {
      config.headers["x-access-token"] = store.state.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/*
 * 请求响应拦截
 * 用于处理数据返回后的操作
 */
axios.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      //请求成功后关闭加载框
      if (loading) {
        loading.close();
      }
      const res = response.data;
      if (res.code === '0') {
        resolve(res);
      } else {
        reject(res);
      }
    });
  },
  error => {
    console.log("error = ", error);
    //请求成功后关闭加载框
    if (loading) {
      loading.close();
    }
    //断网处理或者请求超时
    if (!error.response) {
      //请求超时
      if (error.message && error.message.includes("timeout")) {
        console.log("超时了");
        messages("error", "请求超时，请检查互联网连接");
      } else {
        //断网，可以展示断网组件
        console.log("断网了");
        messages("error", "请检查网络是否已连接");
      }
      return;
    }
    const status = error.response.status;
    switch (status) {
      case 500:
        messages("error", "服务器内部错误");
        break;
      case 404:
        messages("error", "未找到远程服务器");
        break;
      case 401:
        messages("warning", "用户登陆过期，请重新登陆");
        localStorage.removeItem("token");
        setTimeout(() => {
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 1000);
        break;
      case 400:
        messages("error", "数据异常");
        break;
      default:
        messages("error", error.response.data.message);
    }
    return Promise.reject(error);
  }
);

/*
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时候携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/*
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时候携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
