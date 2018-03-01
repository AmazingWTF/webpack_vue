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

    <Popup class="pop" height="100%" v-model="search_show" :is-transparent="true" width="100%" position="top">
      <div class="search">
        <div class="search_header">
          <div class="icon-night search_back_icon" @click="hide_pop">
          </div>
          <input class="search_input" placeholder="enter something" autofocus/>

        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
  import fetch from '@/api/config.js'
  import { Popup, Panel } from 'vux'
  export default {
    data () {
      return {
        search_show: false,
        type: '1',
        header: 'header-words',
        footer: {
          url: '/',
          title: 'footer-title'
        },
        list: [
          {
            src: 'javascript:void(0);',
            title: 'title-1',
            desc: 'content-1',
            url: '/'
          }
        ]
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
      },
      hide_pop () {
        this.search_show = false
      }
    },
    components: {
      Popup,
      Panel
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

    .pop {
      position: fixed;
      .search {
        background-color: #fff;
        width: 100%;
        .search_header {
          background-color: @bg-red;
          padding: 20px 3px 10px 0;
          display: -webkit-flex;
          display: flex;
          line-height: 35px;
          .search_back_icon {
            padding: 0 10px;
          }
          .search_input {
            height: 100%;
            -webkit-flex: 1;
            flex: 1;
            height: 35px;
            background-color: @bg-red;
            font-size: 16px;
            color: #ddd;
            letter-spacing: 1px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: 1px solid #bbb;
            padding-right: 30px;
            &::-webkit-input-placeholder {
              color: #fff;
              opacity: .4;
            }
          }

        }
      }
    }


  }
</style>
