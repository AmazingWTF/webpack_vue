<template>
  <div class="index">
    <Heads></Heads>
    <div class="content" @scroll="scrolling">
      <ul class="tab">
        <router-link :class="selected_tab === 'songs' ? 'active' : ''" @click.native="changeTab('songs')" to="/index/songs" tag="li">音乐</router-link>
        <router-link :class="selected_tab === 'videos' ? 'active' : ''" @click.native="changeTab('videos')" to="/index/videos" tag="li">视频</router-link>
        <router-link :class="selected_tab === 'fm' ? 'active' : ''" @click.native="changeTab('fm')" to="/index/fm" tag="li">电台</router-link>
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
  let time

  export default {
    data () {
      return {
        selected_tab: 'songs',
        keep_: 'songs'
      }
    },
    components: {
      Heads,
      Foots
    },
    methods: {
      changeTab (v) {
        this.selected_tab = v
      },
      scrolling (e) {
        let now = new Date().getTime()
        if (now - time <= 50) return
        time = new Date().getTime()
        // location.href = location.pathname + '?st=' + e.target.scrollTop
        console.log(location.pathname + '?st=' + e.target.scrollTop)
      }
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
