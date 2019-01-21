import Vue from 'vue'

import App from './App.vue'
import router from './router'
import { store } from './store'
import VueMaterial from 'vue-material'
import Chart from 'chart.js'
import VueChartkick from 'vue-chartkick'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAxios from 'vue-axios';
import axios from 'axios';


Vue.use(VueAxios, axios); 

Vue.use(VueMaterial,VueChartkick, {adapter: Chart});
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
