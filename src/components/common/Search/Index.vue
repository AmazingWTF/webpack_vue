<template>
  <div class="search_index">
    <div class="search_singer_category">
        <span class="icon-concat"></span>
        <span class="words">歌手分类</span>
        <span class="icon-rightArrow"></span>
      </div>

      <div class="search_hot">
        <p class="hot_title">热门搜索</p>
        <div class="hot_key_words">
          <span
            v-for="(item, index) of recommend_list"
            :key="index"
            @click="choosed_search(item)"
            class="key_words_item">
            {{ item }}
          </span>
        </div>
      </div>

      <ul class="search_history" >
        <li
          v-for="(item, index) of history_list"
          :key="index"
          class="history_item">
          <span class="icon-settime">
          </span>
          <span
            @click="choosed_search(item)"
            class="history_item_words">
            {{ item }}
          </span>
          <span class="icon-exit">
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
  // import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        recommend_list: ['田馥甄', '林宥嘉', '小幸运', 'Welcome To New York', '谈判官', '第一步', 'Xon', '追光者', 'Something Just Like This', 'Planet'],
        history_list: ['sunrise', '历历万乡', '在人间', '天后', 'freedom']
      }
    },
    methods: {
      choosed_search (choosedWords) {
        this.$store.commit('change_search_tab', 'SearchResult')
      }
    }
  }
</script>

<style lang="less" scoped>
  .search_index {
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
</style>
