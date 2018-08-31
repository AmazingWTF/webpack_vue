<template>
  <div class="header">
    <div
      @click="showSideBar(true)"
      class="icon-bread bread">
    </div>
    <ul>
      <router-link
        :active-class="'active'"
        tag="li"
        class="icon-yinfu"
        to="/music"></router-link>
      <router-link
        :active-class="'active'"
        tag="li"
        class="icon-logo"
        to="/index"></router-link>
      <router-link
        :active-class="'active'"
        tag="li"
        class="icon-concat"
        to="/friends"></router-link>
    </ul>
    <div class="icon-search" @click="show_search">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'active',
      'search_show',
      'search_type'
    ])
  },
  methods: {
    ...mapActions([
      'searchShow',
      'changeSearchType',
      'showSideBar'
    ]),
    show_search () {
      this.searchShow(true)
      this.changeSearchType('SearchIndex')
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
    position: fixed;
    left: 0;
    top: 0;
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
