import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    active: 'index',  // 头部导航高亮
    mask_show: false,
    index_status: '',
    search_show: false,  // 搜索弹框显示
    // search tab 状态
    search_type: 'SearchIndex'
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
      console.log(state.mask_show)
    },
    change_search_status (state, bol) {
      state.search_show = bol
    },
    // search tab状态
    change_search_tab (state, type) {
      state.search_type = type
    }
  }
})

export default store
