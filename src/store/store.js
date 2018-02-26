import Vue from 'vue'
import Vuex from 'vuex'
import { setSessionStorage } from '@/utils/utils.js'

Vue.use(Vuex)
let d = +new Date()
setSessionStorage({
  type: 'store' + d,
  name: 'wallmart' + d
})
const store = new Vuex.Store({
  state: {
    active: 'index',
    mask_show: false,
    index_active: 'songs',
    index_status: ''
  },
  mutations: {
    isActive (state, tag) {
      state.active = tag
    },
    index_tab_isActive (state, tag) {
      state.index_active = tag
    },
    maskShow (state) {
      state.mask_show = !state.mask_show
    },
    change_index_status (state, route) {
      // state.index_status = route
      console.log('route----------')
      console.log(route)
    }
  }
})

export default store
