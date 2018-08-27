const state = {
  search_show: false,
  search_type: 'SearchIndex',
  result_tab_choosed: 0
}

const getters = {
  search_show: state => state.search_show,
  search_type: state => state.search_type
}

const mutations = {
  change_search_status (state, bol) {
    state.search_show = bol
  },
  change_search_tab (state, type) {
    state.search_type = type
  },
  result_tab_choosed (state, id) {
    state.result_tab_choosed = id
  }
}

export default {
  state,
  getters,
  mutations
}
