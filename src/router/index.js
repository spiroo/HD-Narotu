import Vue from "vue";
import Router from "vue-router";
import store from "../store"
import NProgress from "nprogress"; // 引入进度条组件 cnpm install nprogress --save
import "nprogress/nprogress.css"
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
    {
      path: "/login",
      component: getComponent("login", "Index")
    },
    {
      path: "/hd",
      component: getComponent("test", "user")
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
          path: '/management',
          name: 'manament',
          component: getComponent('orManagement', 'management'),
          meta: { title: '组织管理' }
        },
        {
          path: '/listDelopy',
          name: 'listDelopy',
          component: getComponent('orManagement', 'listDelopy'),
          meta: { title: '列表配置' }
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
<<<<<<< HEAD
          component: getComponent("role", "index"),
          meta: { title: "用户权限设置" }         
        },
        {
          path:"/roleDetail/:id",
          name:"roleDetail",
          component: getComponent("role", "roleDetail"),
        },
       
        
      ]
    },
    {
      path:"/huadian",
      name:"test",
      component: getComponent("test", "user"),
    },
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
=======
          component: getComponent("role", "Index"),
          meta: { title: "用户权限设置" }
        },
        {
          path: "/userinf",
          component: getComponent("userinf", "Index"),
          meta: { title: "用户列表" }
        },
        {
          path: "/userDetail/:id",
          component: getComponent("userinf", "userDetail"),
          meta: { title: "用户详情" }
        }
      ]
    }
>>>>>>> 120d68e7b464c9e3db84847e5c3631fc43d57896
  ]
});

// 判断是否存在token
myRouter.beforeEach((to, from, next) => {
  NProgress.start();
<<<<<<< HEAD
  // if (to.path !== "/login" && !store.state.token) {
  //   next("/login"); // 跳转登录
  //   NProgress.done(); // 结束Progress
  // }
=======
  if (to.path !== '/login' && !store.state.token) {
    next('/login'); // 跳转登录
    NProgress.done(); // 结束Progress
  }
>>>>>>> 120d68e7b464c9e3db84847e5c3631fc43d57896
  next();
});

myRouter.afterEach(() => {
  NProgress.done(); // 结束Progress
});

export default myRouter;
