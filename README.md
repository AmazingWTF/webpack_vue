# webpack_vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### something notice
  - router-link
    ```
    * component/router-link/router-view 的传参(:to :param ...)并不是随便传的，:to是双向、v-bind:to是单向、to是单纯值传递
    * <router-link append />  -> append 属性添加后，会将当前路由拼接上来
    ```
  - vue-router 匹配： 
    ``` text
    /param/:id              -> 匹配所有 /param/xxx 类型的路由
    /param/:id?             -> 参数id可选
    /param/:id(\\d+)        -> 只匹配id为数字的路由
    /param/*                -> 匹配/param开头的任意路由
    /param/(optional/)?id   -> optional 部分可选
    ```
  - router-link
    ``` html
    <router-link :to="{ name: 'user', params: { userId: 123 }}"></router-link>
    ```
  - 编程式导航
    ``` javascript
    router.push({ name: 'user', params: { userId } })
    router.push({ path: `/user/${userId}` }) // 有 path 的话，name 不生效
    router.push({ path: `/user`, params: { userId } })
    ```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
