import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from 'jquery'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// mui
import './lib/mui/css/mui.css'
import mui from './lib/mui/js/mui.js'
Vue.prototype.mui = mui

import '@/assets/css/index.css'
import url from '@/assets/js/request'
Vue.prototype.$http = url

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
