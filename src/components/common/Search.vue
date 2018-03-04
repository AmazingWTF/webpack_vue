<template>
  <Popup class="pop" height="100%" v-model="search_show" :is-transparent="true" width="100%" position="top">
    <div class="search">
      <div class="search_header">
        <div class="icon-night search_back_icon" @click="hide_search">
        </div>
        <input ref="search_input" class="search_input" placeholder="enter something"/>

      </div>
      <div class="search_singer_category">
        <span class="icon-concat"></span>
        <span class="words">歌手分类</span>
        <span class="icon-rightArrow"></span>
      </div>

      <div class="search_hot">
        <p class="hot_title">热门搜索</p>
        <div class="hot_key_words">
          <span class="key_words_item">
            田馥甄
          </span>
          <span class="key_words_item">
            林宥嘉
          </span>
          <span class="key_words_item">
            小幸运
          </span>
          <span class="key_words_item">
            Welcome To New York
          </span>
          <span class="key_words_item">
            谈判官
          </span>
          <span class="key_words_item">
            第一步
          </span>
          <span class="key_words_item">
            Xon
          </span>
          <span class="key_words_item">
            追光者
          </span>
          <span class="key_words_item">
            Something Just Like This
          </span>
          <span class="key_words_item">
            Planet
          </span>
        </div>
      </div>

      <ul class="search_history" >
        <li class="history_item">
          <span class="icon-settime">
          </span>
          <span class="history_item_words">
            sunrise
          </span>
          <span class="icon-exit">
          </span>
        </li>
        <li class="history_item">
          <span class="icon-settime">
          </span>
          <span class="history_item_words">
            历历万乡
          </span>
          <span class="icon-exit">
          </span>
        </li>
        <li class="history_item">
          <span class="icon-settime">
          </span>
          <span class="history_item_words">
            在人间
          </span>
          <span class="icon-exit">
          </span>
        </li>
        <li class="history_item">
          <span class="icon-settime">
          </span>
          <span class="history_item_words">
            天后
          </span>
          <span class="icon-exit">
          </span>
        </li>
        <li class="history_item">
          <span class="icon-settime">
          </span>
          <span class="history_item_words">
            freedom
          </span>
          <span class="icon-exit">
          </span>
        </li>
      </ul>

    </div>
  </Popup>
</template>

<script>
  import { Popup, Panel } from 'vux'
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
      }
    },
    methods: {
      hide_search () {
        // this.$store.commit('change_search_status', false)
        this.search_show = false
      }
    },
    activated () {
      console.log('search activated')
    },
    components: {
      Popup,
      Panel
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

      .search_singer_category {
        display: -webkit-flex;
        display: flex;
        color: #aaa;
        font-size: 14px;
        padding: 15px;
        -webkit-justify-content: center;
        justify-content: center;
        border-bottom: 1px solid #eee;
        [class^=icon] {
          color: #ccc;
          font-size: 16px;
        }
        .icon-concat {
          padding-right: 5px;
        }
      }

      .search_hot {
        font-size: 14px;
        .hot_title {
          font-size: 12px;
          color: #999;
          padding: 20px 0 0 10px;
        }
        .hot_key_words {
          color: #666;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          padding-bottom: 25px;
          .key_words_item {
            border: 1px solid #ccc;
            border-radius: 14px;
            padding: 6px 10px;
            margin: 10px 0 0 10px;
          }
        }
      }

      .search_history {
        color: #666;
        padding: 0 10px;
        .history_item {
          display: -webkit-flex;
          display: flex;
          height: 40px;
          font-size: 16px;
          span {
            line-height: 40px;
          }
          .icon-settime {
            color: #bbb;
            padding-right: 10px;
          }
          .history_item_words {
            -webkit-flex: 1;
            font-size: 12px;
            flex: 1;
            border-bottom: 1px solid #eee;
          }
          .icon-exit {
            border-bottom: 1px solid #eee;
            color: #bbb;
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
