<template>
  <Popup class="pop" height="100%" v-model="search_show" :is-transparent="true" width="100%" position="top">
    <div class="search">
      <div class="search_header">
        <div class="icon-night search_back_icon" @click="hide_search">
        </div>
        <input ref="search_input" class="search_input" placeholder="enter something"/>

      </div>
      <router-view :is="type"></router-view>
    </div>
  </Popup>
</template>

<script>
  import { Popup } from 'vux'
  import SearchIndex from '@/components/common/Search/Index'
  import SearchResult from '@/components/common/Search/Result'
  export default {
    data () {
      return {
      }
    },
    created () {
      console.log('search created')
    },
    computed: {
      search_show: {
        get () {
          return this.$store.state.search_show
        },
        set (bol) {
          this.$store.commit('change_search_status', bol)
        }
      },
      type: {
        get () {
          return this.$store.state.search_type
        },
        set (params) {
          this.search_type = params
        }
      }
    },
    methods: {
      hide_search () {
        this.search_show = false
      }
    },
    activated () {
      console.log('search activated')
    },
    components: {
      Popup,
      SearchIndex,
      SearchResult
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/common/less/mixin.less';
  .pop {
    position: fixed;
    .search {
      background-color: #fff;
      width: 100%;
      height: 100%;
      .search_header {
        background-color: @bg-red;
        padding: 20px 3px 10px 0;
        display: -webkit-flex;
        display: flex;
        line-height: 35px;
        .search_back_icon {
          padding: 0 10px;
          font-size: 24px;
          color: #ddd;
          line-height: 35px;
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
</style>
