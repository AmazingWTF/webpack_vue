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
    <div class="icon-search" @click="show_search">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      active () {
        return this.$store.state.active
      }
    },
    methods: {
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
      show_search () {
        this.$store.commit('change_search_status', true)
        setTimeout(() => {
          console.log(this.$store.state.search_show)
        })
      }
    },
    components: {
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
    >ul {
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
