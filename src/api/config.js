import axios from 'axios'
// const qs = require('qs')
const host = 'http://127.0.0.1:2001'

const fetch = function (that, params, cb) {
  console.log('fetch trigger!')
  that.$vux.loading.show()

  axios.get(host + params.url)
    .then((res) => {
      cb(res)
      setTimeout(() => {
        that.$vux.loading.hide()
      }, 400)
    })
    .catch((err) => {
      console.log(err)
    })

  // that.$http.jsonp(host + params.url, params.data || {})
  //   .then(res => {
  //     cb(res.body)
  //     that.$vux.loading.hide()
  //   })
}

export default fetch
