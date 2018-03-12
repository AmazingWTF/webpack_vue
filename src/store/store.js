import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    active: 'index',  // 头部导航高亮
    mask_show: false,
    index_active: 'IndexSongs',  // index 页面tab高亮
    index_status: '',
    search_show: false,  // 搜索弹框显示
    index_route: '',
    // loading 参数
    loading_params: {},
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
    deal_index_route (state, path) {
      state.index_route = path
    },
    // 公共状态 such as loading
    loading (state, params) {
      state.loading_params = params.params
      params.this_.show(params.params)
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
