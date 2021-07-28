import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/iview.js";
import directive100vh from "./directives/100vh";

Vue.config.productionTip = false;
Vue.directive("100vh", directive100vh);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
