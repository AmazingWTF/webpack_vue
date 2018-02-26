<template>
  <div class="header">
    <div
      @click="$store.commit('maskShow')"
      class="icon-bread bread">
    </div>
    <ul>
      <router-link
        to="/music"
        tag="li"
        class="icon-yinfu"
        @click.native="$store.commit('isActive', 'music')"
        :class="{'active' : active === 'music'}">
      </router-link>
      <router-link
        to="/index"
        tag="li"
        class="icon-logo"
        @click.native="test"
        :class="{'active' : active === 'index'}">
      </router-link>
      <router-link
        to="/friends"
        tag="li"
        class="icon-concat"
        @click.native="$store.commit('isActive', 'friends')"
        :class="{'active' : active === 'friends'}">
      </router-link>
    </ul>
    <div class="icon-search" @click="search">
    </div>
  </div>
</template>

<script>
  import fetch from '@/api/config.js'
  export default {
    data () {
      return {
        msg: 'Heads.vue'
      }
    },
    computed: {
      active () {
        return this.$store.state.active
      }
    },
    methods: {
      search () {
        fetch(this, {url: '/search?q=周杰伦'}, (res) => {
          console.log(res)
        })
      },
      test () {
        this.$store.commit('isActive', 'index')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/common/less/mixin.less';
  @import '../../assets/fonts/iconfont.css';
  .header {
    height: 64px;
    width: 100%;
    background-color: @bg-red;
    display: flex;
    justify-content: center;
    font-size: 24px;
    line-height: 80px;
    position: relative;
    line-height: 20px;
    .active {
      color: #eee;
    }
    ul {
      color: #deadad;
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      padding-top: 28px;
      li {
        height: 100%;
      }
    }
    >div {
      color: #eee;
      position: absolute;
      top: 0;
      height: 100%;
    }
    .icon-bread {
      padding-top: 1px;
      padding-top: 30px;
      left: 20px;
    }
    .icon-search {
      line-height: 78px;
      right: 20px;
    }
  }
</style>
