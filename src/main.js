import Vue from "vue";
import dead from "./views/goDeadPage/goDead";
import router from "./router/index";
import store from "./store/index";
import "./plugins/element.js";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(dead)
}).$mount("#app");
