import Vue from 'vue'
import App from './App.vue'

import { router } from "./core/router";
import { store } from "./store";

Vue.config.productionTip = false
Vue

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
