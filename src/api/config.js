const host = 'https://api.douban.com/v2/music'

const fetch = function (that, params, cb) {
  that.$vux.loading.show()

  that.$http.jsonp(host + params.url, params.data || {})
    .then(res => {
      cb(res.body)
      that.$vux.loading.hide()
    })
}

export default fetch
