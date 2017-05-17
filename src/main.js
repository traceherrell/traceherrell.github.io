// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/scss/bootstrap.scss'
import './assets/css/main.scss'

import VueScrollTo from 'vue-scrollto'

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  onDone: false,
  onCancel: false
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
