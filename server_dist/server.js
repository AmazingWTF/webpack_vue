var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
var path = require("path");
var router = require('./fileRoute');

//
const superAgent = require('superagent');
//

var port = 8081;
var pagePath = "/index.html"

function parser(str) {
    if (typeof str !== 'string') {
        console.warn('parser\'s param should be a string')
        return
    }
    let r = {}
    str.split('?')[1].split('&').forEach(val => {
        const v = val.split('=')
        r[v[0]] = v[1]
    })

    return r
}

router.setRootPath(__dirname);
console.log('__dirname: ', __dirname)

router.get('/', function (req, res) {
  console.log('mark 1')
    // 文件首页
    router.sendFile(res, pagePath);
});

router.get('/api', function (req, res) {
  console.log('mark 2')
    const params = parser(req.url)

    //
    superAgent
        .get('127.0.0.1:1000')
        .send(params)
        .end((err, sres) => {
            if (err) {
                return console.log(err)
            }
            console.log('````````````````')
            console.log(sres.text)
        })
    //
})

const srv = http.createServer((req, res) => {
    router.init(req, res);
})

// 监听端口
srv.listen(port, () => {
  console.log('enter \'10.2.69.151.8081\' into your mobile device')
});
