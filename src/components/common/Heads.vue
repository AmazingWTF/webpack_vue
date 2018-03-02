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
  </div>
</template>

<script>
  import { Popup, Panel } from 'vux'
  export default {
    data () {
      return {
        search_show: false,
        type: '3',
        header: 'headss',
        list: [
          {
            src: 'http://p1.music.126.net/fCM2Y2_pKfIih1DwbVqQAg==/109951162983782334.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
            title: '周杰伦',
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
        console.log(this.$refs.search_input)
        setTimeout(() => {
          this.$refs.search_input.focus()
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

  }
</style>
