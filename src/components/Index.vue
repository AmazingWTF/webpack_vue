<template>
  <div ref="index" class="index">
    <Heads></Heads>
    <div class="content" @scroll="scrolling">
      <ul class="tab">
        <li :class="selected_tab === 'songs' ? 'active' : ''" @click="changeTab('songs')" href='javascript:;'>音乐</li>
        <li :class="selected_tab === 'videos' ? 'active' : ''" @click="changeTab('videos')" href='javascript:;'>视频</li>
        <li :class="selected_tab === 'fm' ? 'active' : ''" @click="changeTab('fm')" href='javascript:;'>电台</li>
      </ul>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <foots></foots>
  </div>
</template>

<script>
  import Heads from './common/Heads.vue'
  import Foots from './common/Foots.vue'
  // import BScroll from 'better-scroll'
  let time

  export default {
    data () {
      return {

      }
    },
    components: {
      Heads,
      Foots
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
        this.$router.push({
          name: v,
          params: {
            type: v
          }
        })
        this.$store.commit('index_tab_isActive', v)
        // console.log('index_active: ', this.selected_tab)
      },
      scrolling (e) {
        let now = new Date().getTime()
        if (now - time <= 50) return
        time = new Date().getTime()
      }
    },
    created () {
      const type = this.$route.path.split('/').slice(-1)[0] || 'songs'
      this.$store.commit('index_tab_isActive', type)
      // console.log(this.$route)
      // console.log(type)
      console.log('index created ')
    },
    mounted () {
      // console.log(this.$refs.index)
      // console.log(BScroll)
      // this.$nextTick(() => {
      //   this.scroll = new BScroll(this.$refs.index, {})
      // })
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
