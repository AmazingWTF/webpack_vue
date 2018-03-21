const axios = require('axios')

const PROXY_HOST = 'http://127.0.0.1:8888'
const key = 'd0be8836fea578f4eb968e4973f3898e'
// const fetch = (params) => {

// }

module.exports = {
  search (param) {
    axios.get(PROXY_HOST + '/index', {
      params: {
        key,
        title: encodeURIComponent(param)
      }
    })
    .then(function (res) {
      console.log(res)
      // let data = res.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
