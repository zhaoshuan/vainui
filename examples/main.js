import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/css/base.css';

import ui from './../packages/index'
// import './../lib/index/style.css'
Vue.use(ui)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
