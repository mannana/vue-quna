import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import vueResource from 'vue-resource'

//对整个页面使用fastClick,避免300ms延迟
fastClick.attach(document.body);
Vue.config.productionTip = false
Vue.use(vueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
