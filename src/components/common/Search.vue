<template>
  <Popup class="pop" height="100%" v-model="search_show" :is-transparent="true" width="100%" position="top">
    <div class="search">
      <div class="search_header">
        <div class="icon-night search_back_icon" @click="hide_search">
        </div>
        <input ref="search_input" class="search_input" @keyup.enter="search" placeholder="enter something" v-model="searchKeyWords"/>
        <div class="icon-search search_back_icon search_icon" @click="search">

        </div>
      </div>
      <router-view class="search_result" :searchKeyWords="searchKeyWords" :result="results" :is="search_type"></router-view>
    </div>
  </Popup>
</template>

<script>
  import { Popup } from 'vux'

  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import SearchIndex from '@/components/common/Search/Index'
  import SearchResult from '@/components/common/Search/Result'
  import * as utils from '@/utils/utils'
  export default {
    data () {
      return {
        searchKeyWords: '',
        results: null
      }
    },
    created () {
      console.log('search created')
    },
    computed: {
      ...mapGetters([
        'search_type'
      ]),
      search_show: {
        get () {
          return this.$store.state.search.search_show
        },
        set (newVal) {
          this.$store.state.search.search_show = newVal
        }
      }
    },
    methods: {
      ...mapMutations([
        'change_search_status',
        'change_search_tab',
        'changeIndexActivedTab'
      ]),
      ...mapActions([
        'getSearchResult'
      ]),
      hide_search () {
        this.changeIndexActivedTab(false)
      },
      search () {
        let _this = this
        let searchKeyWords = this.searchKeyWords.trim()
        if (!searchKeyWords) return
        this
          .then(function (res) {
            console.log(res)
            _this.change_search_tab('SearchResult')
            _this.results = res.data.musics
          })
          .catch(function (error) {
            console.log(error)
          })
        let local = utils.getLocalStorage('search_history')
        if (local) {
          local = local.split(',')
          local.unshift(searchKeyWords)
          utils.setLocalStorage({
            search_history: local.slice(0, 10).join(',')
          })
        } else {
          utils.setLocalStorage({search_history: searchKeyWords})
        }
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
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background-color: @bg-red;
        padding: 20px 0 10px 0;
        display: flex;
        line-height: 35px;
        height: 35px;
        box-sizing: content-box;
        .search_back_icon {
          padding: 0 10px;
          font-size: 24px;
          color: #ddd;
          line-height: 35px;
        }
        .search_input {
          display: block;
          -webkit-flex: 1;
          flex: 1;
          background-color: @bg-red;
          font-size: 16px;
          color: #ddd;
          letter-spacing: 1px;
          border-bottom: 1px solid #bbb;
          padding-right: 30px;
          &::-webkit-input-placeholder {
            color: #fff;
            opacity: .4;
          }
        }
        .icon-search {
          border-bottom: 1px solid #bbb;
          height: 100%;
        }
      }

      .search_result {
        // box-sizing: border-box;
        padding-top: 65px;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }
  }
</style>
