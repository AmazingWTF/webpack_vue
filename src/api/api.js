// const axios = require('axios')

// const key = 'd0be8836fea578f4eb968e4973f3898e'
// const fetch = (params) => {

// }

const pre = /\.(cn|com)/.test(location.host) ? '' : '/api'

module.exports = {
  search: pre + '/music/search'
}
