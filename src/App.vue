<template>
  <div id="app">
    <SideBar></SideBar>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Search></Search>
  </div>
</template>

<script>
  import SideBar from './components/common/SideBar.vue'
  import Search from '@/components/common/Search'
  export default {
    name: 'app',
    data () {
      return {
        pop_status: false
      }
    },
    computed: {
      isLoading () {
        return this.$store.state.loading_params
      }
    },
    watch: {
      $route (to, from) {
        // console.log(to)
        const path = to.path
        // 已经访问过的路由
        this.$store.commit('deal_index_route', path)
      }
    },
    created () {
      // this.$store.commit('loading', {
      //   this_: this.$vux.loading,
      //   params: {
      //     text: 'xixiix',
      //     position: 'fixed'
      //   }
      // })
    },
    mounted () {

    },
    components: {
      SideBar,
      Search
    }
  }
</script>

<style lang="less">
@import '/assets/css/reset.css';
@import '/assets/fonts/iconfont.css';
@import '/assets/common/less/mixin.css';

html, body {
  height: 100%;
}

* {
  line-height: 1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #fbfbfb;
}

a{
  -webkit-tap-highlight-color: transparent;
}

a{text-decoration:none;}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  display: none !important;
}

input {
  border: none;
  outline: none;
}

.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, .4);
  transition: opacity .3s linear;
  opacity: 0;
  &.show {
    opacity: 1;
    z-index: 5;
  }
}

img[lazy=loading],
img[lazy=error] {
  width: 50px;
  display: block;
  margin: 0 auto;
}

</style>
