import types from '../mutation-types'

export const state = {
  active: 'index',
  mask_show: false,
  testA: 'a',
  testB: 'b',
  testC: 'c'
}

export const getters = {
  active: state => state.active,
  mask_show: state => state.mask_show
}

export const actions = {
  changeIndexActivedTab ({commit}, type) {
    commit(types.HOME_TAB_ACTIVED, type)
  },
  showSideBar ({commit}, bol) {
    commit(types.MASK_SHOW, bol)
  }
}

// 只能是同步操作
export const mutations = {
  [types.HOME_TAB_ACTIVED] (state, tag) {
    state.active = tag
  },
  [types.MASK_SHOW] (state, bol) {
    state.mask_show = bol
  }
}

// actions 提交的是mutations, 可以包含任意异步操作

export default {
  state,
  getters,
  actions,
  mutations
}
