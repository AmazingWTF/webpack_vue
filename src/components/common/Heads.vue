<template>
  <div class="header">
    <div
      @click="$store.commit('maskShow')"
      class="icon-bread bread">
    </div>
    <ul>
      <li
        class="icon-yinfu"
        @click="change_tab('music')"
        :class="{'active' : active === 'music'}">
      </li>
      <li
        class="icon-logo"
        @click="change_tab('index')"
        :class="{'active' : active === 'index'}">
      </li>
      <li
        class="icon-concat"
        @click="change_tab('friends')"
        :class="{'active' : active === 'friends'}">
      </li>
    </ul>
    <div class="icon-search" @click="search">
    </div>

    <Popup v-model="search_show" width="100%" height="100%" position="top" >
      <div class="search">
        <input value="enter the content what you want to search for" />
      </div>
    </Popup>
  </div>
</template>

<script>
  import fetch from '@/api/config.js'
  import { Popup } from 'vux'
  export default {
    data () {
      return {
        search_show: false
      }
    },
    computed: {
      active () {
        return this.$store.state.active
      }
    },
    methods: {
      search () {
        this.search_show = true
        fetch(this, {url: '/search?q=周杰伦'}, (res) => {
          console.log(res)
        })
      },
      change_tab (type) {
        this.$store.commit('isActive', type)
        if (type === 'index') {
          if (this.$store.state.index_route) {
            console.log('the route_list in the store is not an empty array')
            this.$router.push(this.$store.state.index_route)
          }
        } else {

        }
        this.$router.push({
          path: `/${type}`
        })
      }
    },
    components: {
      Popup
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

    .search {
      width: 100%;
      height: 100%;
    }
  }
</style>
