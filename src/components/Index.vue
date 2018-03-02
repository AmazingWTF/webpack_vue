<template>
  <div ref="index" class="index">
    <Heads></Heads>
    <div class="content" @scroll="scrolling">
      <ul class="tab">
        <li :class="selected_tab === 'IndexSongs' ? 'active' : ''" @click="changeTab('IndexSongs')" href='javascript:;'>音乐</li>
        <li :class="selected_tab === 'IndexVideos' ? 'active' : ''" @click="changeTab('IndexVideos')" href='javascript:;'>视频</li>
        <li :class="selected_tab === 'IndexFM' ? 'active' : ''" @click="changeTab('IndexFM')" href='javascript:;'>电台</li>
      </ul>

      <keep-alive>
        <router-view :is="type"></router-view>
      </keep-alive>
    </div>
    <foots></foots>
  </div>
</template>

<script>
  import Heads from '@/components/common/Heads.vue'
  import Foots from '@/components/common/Foots.vue'
  import IndexSongs from '@/components/Index/Songs'
  import IndexVideos from '@/components/Index/Videos'
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
      Heads,
      Foots,
      IndexSongs,
      IndexVideos,
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
        background-color: #fff;
        justify-content: space-around;
        li {
          text-align: center;
          padding: 0 15px;
          height: 35px;
          line-height: 32px;
          border-bottom: 2px solid transparent;
          font-size: 14px;
          transition: border .5s;
          &.active {
            border-color: @font-red;
            color: @font-red;
          }
        }
      }
    }
  }
</style>
