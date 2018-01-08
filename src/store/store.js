import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    active: 'index',
    mask_show: false,
    index_status: ''
  },
  mutations: {
    isActive (state, tag) {
      state.active = tag
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
