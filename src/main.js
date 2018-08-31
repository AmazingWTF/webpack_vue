// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css'
// import store from '@/store/store.js'
import store from '@/store/index'
import { LoadingPlugin, ToastPlugin } from 'vux'
import VueLazyload from 'vue-lazyload'
import { loadingImg, errorImg } from '@/assets/img/img'

Vue.config.productionTip = false
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin, {position: 'top'})
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImg,
  loading: loadingImg,
  attempt: 1
})

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
  next()
})

router.afterEach((to, from, next) => {
  document.title = to.meta.title
})
