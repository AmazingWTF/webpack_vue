import api from '@/api/api'
import types from '../mutation-types'

const state = {
  search_show: false,
  search_type: 'SearchIndex',
  result_tab_choosed: 0
}

const getters = {
  search_show: state => state.search_show,
  search_type: state => state.search_type
}

const actions = {
  getSearchResult (searchKeyWords) {
    return api.search({
      q: searchKeyWords
    })
  },
  searchShow ({commit}, bol) {
    commit(types.SEARCH_SHOW, bol)
  },
  changeSearchType ({commit}, type) {
    commit(types.SEARCH_TAB_ACTIVE, type)
  }
}

const mutations = {
  [types.SEARCH_SHOW] (state, bol) {
    state.search_show = bol
  },
  [types.SEARCH_TAB_ACTIVE] (state, type) {
    state.search_type = type
  },
  [types.RESULT_TAB_CHOOSED] (state, id) {
    state.result_tab_choosed = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
