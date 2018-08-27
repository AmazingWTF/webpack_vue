const state = {
  active: 'index',
  mask_show: false
}

const getters = {
  active: state => state.active
}

// 只能是同步操作
const mutations = {
  isActive (state, tag) {
    state.active = tag
  },
  index_tab_active (state, tag) {
    state.index_active = tag
  },
  maskShow (state) {
    state.mask_show = !state.mask_show
  }
}

// actions 提交的是mutations, 可以包含任意异步操作

export default {
  state,
  getters,
  mutations
}
