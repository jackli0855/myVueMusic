// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import Vuex from 'vuex'
import store from '@/vuex'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VueResource)
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
