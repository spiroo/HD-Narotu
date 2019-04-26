import Vue from "vue";
import Router from "vue-router";
import store from "../store/index"; // 引入状态管理
import NProgress from "nprogress"; // 引入进度条组件 cnpm install nprogress --save
import "nprogress/nprogress.css";

Vue.use(Router);

/**
 * @parma {String} name 文件夹名称
 * @parma {String} component 视图组件名称
 */
const getComponent = (name, component) => () =>
  import(`@/views/${name}/${component}.vue`);

const myRouter = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home',
    //   component: getComponent('login', 'index')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: getComponent('login','index')
    // },
    {
      path: "/",
      redirect: "/home",
      component: getComponent("login", "index")
    },
    {
      path: "/course",
      component: getComponent("course", "indexCourse")
    },
    {
      path: "/login",
      component: getComponent("login", "Index")
    },

    {
      path: "/forgetPassword",
      component: getComponent("forgetPassword", "Index")
    },
    {
      path: "/",
      redirect: "/home",
      component: getComponent("layout", "Index"),
      children: [
        {
          path: "/home",
          name: "home",
          component: getComponent("home", "Index"),
          meta: { title: "首页" }
        },
        {
          path: "/management",
          name: "manament",
          component: getComponent("orManagement", "management"),
          meta: { title: "组织管理" }
        },
        {
          path: "/users",
          name: "users",
          component: getComponent("users", "Index"),
          meta: { title: "用户管理" }
        },
        {
          path: "/role",
          name: "role",
          component: getComponent("role", "Index"),
          meta: { title: "用户权限设置" }
        }
      ]
    }
    // {
    //   path: "/",
    //   redirect: "/home",
    //   component: getComponent("layout", "Index"),
    //   children: [
    //     {
    //       path: "/home",
    //       name: "home",
    //       component: getComponent("home", "Index"),
    //       meta: { title: "首页" }
    //     },
    //     {
    //       path: "/users",
    //       name: "users",
    //       component: getComponent("users", "Index"),
    //       meta: { title: "用户管理" }
    //     },
    //     {
    //       path: "/course",
    //       name: "course",
    //       component: getComponent("course", "indexCourse"),
    //       meta: { title: "课程管理" }
    //     }
    //   ]
    // }
  ]
});

//判断是否存在token
myRouter.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path !== "/login" && !store.state.token) {
    next("/login"); // 跳转登录
    NProgress.done(); // 结束Progress
  }
  next();
});

myRouter.afterEach(() => {
  NProgress.done(); // 结束Progress
});

export default myRouter;
