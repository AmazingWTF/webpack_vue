<template>
  <div class="search_result">
    <div ref="wrapper" class="wrap">
      <ul ref="inner" class="tab" :line-width=2 active-color="#fc378c">
        <li
          v-for="(item, index) in tab_list"
          :selected="had_choosed === item"
          :key="index"
          @tap="change_tab_active(index)"
          :class="active === index ? 'tab_item actived' : 'tab_item'">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  const tabList = ['单曲', '歌手', '专辑', '歌单', '视频', '主播电台', '用户']
  export default {
    data () {
      return {
        tab_list: tabList,
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
        this.$refs.inner.style.width = width + 'px'
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          tap: true
        })
      })
    },
    methods: {
      change_tab_active (index) {
        console.log(index)
        this.active = index
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../../../assets/common/less/mixin.less';
.search_result {
  .wrap {
    width: 100%;
    .tab {
      display: flex;
      flex-wrap: nowrap;
      width: auto;
      .tab_item {
        white-space: nowrap;
        font-size: 14px;
        line-height: 2;
        padding: 0 20px;
      }
      .tab_item.actived {
        border-bottom: 2px solid @bg-red;
      }
    }
  }
}
</style>
