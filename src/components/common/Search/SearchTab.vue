<template>
  <div class="search_result">
    <div class="result_container" ref="container">
      <swiper class="result_wrapper" ref="inner">
        <swiperSlide
          :selected="had_choosed === item"
          v-for="(item, index) in tabList"
          :key="index"
          :slidesPerView="'auto'"
          @tap="change_tab_active(index)"
          :class="active === index ? 'tab_item actived' : 'tab_item'">
          {{ item }}
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
        had_choosed: tabList[0],
        tab_wid_list: [],
        active: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        const lis = document.querySelectorAll('.tab_item')
        let lisWid = []
        let width = 0
        lis.forEach(v => {
          lisWid.push(v.offsetWidth)
          width += v.offsetWidth
        })
        this.tab_wid_list = lisWid
        this.$refs.inner.width = width + 'px'
        // console.log(width)
        // let swiper = new Swiper('.result_container', {
        //   autoplay: true
        // })
        // console.log(swiper)
      })
    },
    methods: {
      change_tab_active (index) {
        console.log(index)
        this.active = index
      }
    },
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
</style>
