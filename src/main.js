// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store.js'
import vueResource from 'vue-resource'
import { LoadingPlugin } from 'vux'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(LoadingPlugin)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // console.log('router guide')
  // console.log('to', to)
  // console.log('from', from)
  next()
})
