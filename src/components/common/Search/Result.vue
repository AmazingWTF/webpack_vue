<template>
  <div class="search_result">
    <div class="result_container" ref="container">

      <ul style="width:100%;overflow-x:scroll;" class="tab_container">
        <li
          v-for="(item, index) in tabList"
          @click="changeTab(index)"
          :key="index"
          :class="type === index ? 'actived' : ''"
          :ref="'tab' + index"
          class="tab_item">
          {{ item }}
        </li>
      </ul>

      <swiper
        :options="swiperOptions"
        class="content"
        @transitionEnd="test()"
        ref="tab-content">
        <swiperSlide
          v-for="(item, index) in tabList"
          :key="index">
          <ul v-if="infoList[index] && infoList[index].length">
            <li v-for="(item, idx) in infoList[index]"
              :key="idx">
              <p class="item-title">{{item.title}}</p>
              <p>{{ item.author ? item.author.reduce((sum, e) => {return sum + '/' + e.name}, '') + ' - ' + (item.attrs.publisher ? item.attrs.publisher[0] : item.attrs.title[0]) : ''}}</p>
            </li>
          </ul>
        </swiperSlide>
      </swiper>

    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from '@/api/api'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      tabList: ['单曲', '歌手', '专辑', '歌单', '视频', '主播电台', '用户'],
      swiperOptions: {
        direction: 'horizontal'
      },
      type: 0, // 当前选择搜索结果分类
      infoList: [],
      needSendList: []
    }
  },
  props: [
    'searchKeyWords',
    'result'
  ],
  methods: {
    test () {
      this.changeTab(this.$refs['tab-content'].swiper.activeIndex)
    },
    changeTab (index) {
      let refs = this.$refs
      this.type = index
      refs['tab-content'].swiper.slideTo(index)

      if (!this.needSendList[index]) {
        this.getInfo(index)
        this.needSendList[index] = true
      }
    },
    getInfo (index = 0) {
      let _this = this
      console.log(index + '----------')
      api.search({
        q: _this.tabList[index]
      })
        .then((res) => {
          this.$set(this.infoList, index, res.data.musics)
        })
    }
  },
  created () {
    console.log('result created')
    console.log(this.result)
    this.$set(this.infoList, 0, this.result)
  },
  mounted () {
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
    display: flex;
    flex-direction: column;
    width: 100%;
    .tab_container {
      display: flex;
      flex-wrap: nowrap;
      width: auto;
      .swiper-wrapper {
        display: flex;
        .tab_item {
          flex: 1;
          padding: 0 10px;
        }
      }
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
    padding: 0 10px;
  }
  .tab_item:not(:last-child) {
    margin-right: 5px;
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
  .swiper-slide {
    min-height: 100%;
  }
}

.tab_container {
  .swiper-pagination-bullet {
  }
}
</style>
