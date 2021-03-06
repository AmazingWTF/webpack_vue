import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import search from './modules/search'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    search
  },
  strict: debug
})
