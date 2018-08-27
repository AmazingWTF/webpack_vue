<template>
  <div class="search_result">
    <div class="result_container" ref="container">
      <swiper :options="op" class="tab_container">
        <swiperSlide
          class="tab_item"
          v-for="(item, index) in tabList"
          :key="index">
          {{ item }}
        </swiperSlide>
      </swiper>

      <swiper :slidesPerView="5" class="content" ref="inner">
        <swiperSlide
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
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  const tabList = ['单曲', '歌手', '专辑', '歌单', '视频', '主播电台', '用户']
  export default {
    data () {
      return {
        tabList,
        op: {
          slidesPerView: 'auto',
          direction: 'horizontal',
          spaceBetween: 10
        },
        swiperOptions: {
          direction: 'horizontal',
          allowSlideNext: false,
          allowSlidePrev: false,
          on: {
            init () {
              console.log('init')
              console.log(this.activeIndex)
            },
            click () {
              console.log('click')
              console.log(this.activeIndex)
            },
            transitionEnd () {
              // console.log()
            }
          }
        },
        type: 0 // 当前选择搜索结果分类
      }
    },
    created () {
      console.log('result created')
    },
    mounted () {
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
    display: flex;
    flex-direction: column;
    width: 100%;
    .result_wrapper {
      display: flex;
      flex-wrap: nowrap;
      width: auto;
      overflow-x: scroll;
      height: 64px;
      line-height: 64px;
    }
  }
}
.tab_container {
  background-image: radial-gradient(circle at center, #ffe5e5, #fff);
  height: 68px;
  .tab_item {
    white-space: nowrap;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    padding: 0 20px;
  }
  .tab_item.actived {
    border-bottom: 2px solid @bg-red;
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
li {
  padding-top: 8px;
  padding-left: 14px;
}
p {
  font-size: 14px;
  line-height: 1.4em;
}
.content {
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  width: 100%;
}
</style>
