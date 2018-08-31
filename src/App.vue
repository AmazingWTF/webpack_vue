<template>
  <div id="app">
    <Heads></Heads>
    <SideBar></SideBar>
    <transition name="test" duration="500">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>

    <router-view name="content"></router-view>
    <router-view name="dashboard"></router-view>

    <Search></Search>

    <Foots></Foots>
  </div>
</template>

<script>
import Heads from '@/components/common/Heads.vue'
import Foots from '@/components/common/Foots.vue'

import SideBar from '@/components/common/SideBar.vue'
import Search from '@/components/common/Search'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      pop_status: false
    }
  },
  computed: {
    ...mapState({
      testA: state => state.app.testA,
      testB: state => state.app.testB,
      testC: state => state.app.testC
    })
  },
  methods: {
  },
  watch: {
    $route (to, from) {
      // 已经访问过的路由
    }
  },
  created () {
    console.log(this.testA)
  },
  mounted () {

  },
  components: {
    Heads,
    Foots,
    SideBar,
    Search
  }
}
</script>

<style lang="less">
@import './assets/css/reset.css';
@import './assets/fonts/iconfont.css';
// @import './assets/common/less/mixin.less';

.test-enter-active {
  animation: bounce-in .5s;
}
.test-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

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
  display: flex;
  flex-direction: column;
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
