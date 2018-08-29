<template>
  <div ref="index" class="index">
    <Heads></Heads>
    <div class="content" @scroll="scrolling">
      <div class="tab">
        <router-link to="songs">songs</router-link>
        <router-link to="videos">videos</router-link>
      </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Test :message="'test message'" />
    <Foots></Foots>
  </div>
</template>

<script>
import Test from '@/components/Test'
import Heads from '@/components/common/Heads'
import Foots from '@/components/common/Foots'
import IndexFM from '@/components/Index/FM'
import { setLocalStorage, removeLocalStorage } from '@/utils/utils.js'
// import BScroll from 'better-scroll'
let time

export default {
  data () {
    return {
      type: 'IndexSongs'
    }
  },
  components: {
    Test,
    Heads,
    Foots,
    IndexFM
  },
  computed: {
    selected_tab () {
      return this.$store.state.index_active
    },
    keep_ () {
      return this.$store.state.index_active
    }
  },
  methods: {
    changeTab (v) {
      this.type = v
      console.log(this.selected_tab)
      this.$store.commit('index_tab_isActive', v)
      // 可以在点击之后将地址栏加上查询参数
      // this.$router.push({
      //   query: {
      //     child: v
      //   }
      // })
      setLocalStorage({index_route: v})
    },
    scrolling (e) {
      let now = new Date().getTime()
      if (now - time <= 50) return
      time = new Date().getTime()
    }
  },
  created () {
    localStorage.removeItem('index_route')
    if (this.false) removeLocalStorage()
  },
  mounted () {
  }
}
</script>

<style lang="less">
  @import '../assets/common/less/mixin.less';
  .tab .router-link-exact-active {
    color: #ffccc9 !important;
    border-bottom: 2px solid #ffccc9 !important;
  }
  .index {
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      width: 100%;
      overflow-y: scroll;
      padding-top: 35px;
      .tab {
        display: flex;
        position: fixed;
        left: 0;
        top: 64px;
        width: 100%;
        z-index: 1;
        background-color: @bg-red;
        justify-content: space-around;
        a {
          text-align: center;
          padding: 0 15px;
          height: 35px;
          line-height: 32px;
          border-bottom: 2px solid transparent;
          font-size: 14px;
          transition: border .5s;
          color: #fff;
        }
      }
    }
  }
</style>
