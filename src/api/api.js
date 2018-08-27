import axios from 'axios'
import Vue from 'vue'

const pre = /\.(cn|com)/.test(location.host) ? '' : '/api'
let loading = null

axios.defaults.timeout = 10000

axios.interceptors.request.use(config => {
  loading = Vue.$vux.loading
  loading.show({
    text: 'loading'
  })
  return config
})

axios.interceptors.response.use(response => {
  loading.hide()
  return response
}, () => {
  Vue.$vux.toast.text('网络开小差了~')
})

export default {
  search (params) {
    return axios.get(pre + '/music/search', {
      params
    })
  }
}
