<template>
  <div class="fm">
    <PullTo :top-load-method="refresh">
      <ul class="goods_container">
        <li
          v-for="(item, index) in goodsList"
          :key="index"
          @click="hover(index)"
          @mouseenter="hover(index)"
          class="goods_item">
          <img
            :class="mark !== '' && mark === index ? 'active' : ''"
            v-lazy="item.imageurl"/>
        </li>
      </ul>
    </PullTo>
  </div>
</template>

<script>
  // 用于添加瀑布流、懒加载、上下拉加载等等功能
  import results from './data'
  import PullTo from 'vue-pull-to'
  console.log(results)
  export default {
    data () {
      return {
        goodsList: results.results.wareInfo,
        mark: ''
      }
    },
    methods: {
      hover (index) {
        this.mark = index
      },
      refresh (loaded) {
        setTimeout(() => {
          console.log('loaded(\'done\')')
          loaded('done')
        }, 1000)
      }
    },
    computed: {
    },
    components: {
      PullTo
    },
    created () {
      console.log('/index/fm created')
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/common/less/animation.less';
  .fm {
    .goods_container {
      display: flex;
      flex-wrap: wrap;
      background-color: #ddd;
      padding: 5px;
      .goods_item {
        width: 50%;
        padding: 5px;
        box-sizing: border-box;
      }
    }
  }
</style>
