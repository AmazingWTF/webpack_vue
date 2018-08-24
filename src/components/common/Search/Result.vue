<template>
  <div class="search_result">
    <div class="result_container" ref="container">
      <ul class="result_wrapper" ref="inner">
        <li
          class="tab_item"
          v-for="(item, index) in tabList"
          :key="index">
          {{ item }}
        </li>
      </ul>

      <swiper class="content" ref="inner">
        <swiperSlide
          class="tab_item"
          v-for="(item, index) in tabList"
          :key="index">
          <ul>
            <li v-for="(item, index) in results"
              :key="index">
              <p class="item-title">{{item.title}}</p>
              <p>{{ item.author.reduce((sum, e) => {return sum + '/' + e.name}, '') + ' - ' + (item.attrs.publisher ? item.attrs.publisher[0] : item.attrs.title[0])}}</p>
            </li>
          </ul>
        </swiperSlide>
      </swiper>

    </div>
  </div>
</template>

<script>
  // {{item.title + ' - ' + item.author[0].name}}
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  const tabList = ['单曲', '歌手', '专辑', '歌单', '视频', '主播电台', '用户']
  export default {
    data () {
      return {
        tabList,
        type: 0 // 当前选择搜索结果分类
      }
    },
    created () {
      console.log('result created')
    },
    props: ['results'],
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="less" scoped>
@import '../../../assets/common/less/mixin.less';
.search_result {
  .result_container {
    width: 100%;
    .result_wrapper {
      display: flex;
      flex-wrap: nowrap;
      width: auto;
      overflow-x: scroll;
      .tab_item {
        white-space: nowrap;
        font-size: 14px;
        line-height: 2;
        padding: 0 20px;
        width: auto !important;
      }
      .tab_item.actived {
        border-bottom: 2px solid @bg-red;
      }
    }
  }
}
.item-title {
  color: lightblue;
  font-size: 16px;
}
p {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
ul {
  width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
</style>
