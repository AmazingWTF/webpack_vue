const express = require('express')
const superAgent = require('superagent')
const qs = require('qs')

const proxy_host = 'https://api.douban.com/v2/music'

let app = express()

app.get('*', (req, res, next) => {

  console.log(req.params) // 域名下的文件路径
  console.log(req.query) // 查询参数 after '?'

  // superAgent
  //   .get()
  //   .end((sres) => {
  //     console.log(sres)
  //   })

  res.set('Access-Control-Allow-Origin', '*')
  res.send('test server successful')
}).listen(2001, () => {
  console.log('server is listenning at port 2001')
})
