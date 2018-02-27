<template>
  <div id="app">
    <SideBar></SideBar>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div
      @click="$store.commit('maskShow')"
      :class="$store.state.mask_show ? 'show': ''"
      class="mask"></div>
  </div>
</template>

<script>
  import SideBar from './components/common/SideBar.vue'
  export default {
    name: 'app',
    watch: {
      $route (to, from) {
        // console.log(to)
        const path = to.path
        // 已经访问过的路由
        this.$store.commit('deal_index_route', path)
      }
    },
    created () {
    },
    components: {
      SideBar
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #fbfbfb;
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  display: none !important;
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

</style>
