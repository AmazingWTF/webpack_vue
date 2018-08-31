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
  #### Vue
  - transition 组件
    ```
    * <transition name="test"></transition> 定义，样式控制只需要定义 形似 .test-enter-active 的类名，即可控制相应导航阶段行为
    ```

  #### vue-router
  - router-link
    ```
    * param 是路径(/xxx 对应路由类似/user/:id)，query是查询参数(?xx=xx)
    * component/router-link/router-view 的传参(:to :param ...)并不是随便传的，:to是双向、v-bind:to是单向、to是单纯值传递
    * <router-link append />  -> append 属性添加后，会将当前路由拼接上来(直接原样拼接，不会自动拼接 "/")
    * <router-link replace /> -> 类比location.replace
    * <router-link tag="li">  -> 渲染成为li标签，默认为a标签
    * <router-link active-class="rotuer-link-active"> -> 激活默认类名为 router-link-active (或者通过路由的构造选项 linkActiveClass 全局配置)
    * 
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

  - 注意：
    ```
    * 当路由为 /user/:id 时，从 /user/123 导航到 /user/456 不会触发生命周期钩子，可以使用 watch 监听 $route 变化，或者使用导航守卫
    ```
  

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
