<template>
  <div class="fm">
    <PullTo :top-load-method="refresh">
      <ul class="goods_container">
        <li
          v-for="(item, index) in goodsList"
          :key="index"
          :ref="'goods_item' + index"
          @click="hover(index)"
          @mouseenter="hover(index)"
          class="goods_item">
          <img
            :class="mark !== '' && mark === index ? 'active' : ''"
            v-lazy="'http://www.zoudupai.com' + item.share_img.slice(1)"/>
        </li>
      </ul>
    </PullTo>
  </div>
</template>

<script>
// 用于添加瀑布流、懒加载、上下拉加载等等功能
import PullTo from 'vue-pull-to'
export default {
  data () {
    return {
      goodsList: [],
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
  },
  mounted () {
    this.$nextTick(() => {
      console.log('nextTick')
      // 可以定制 column 数量 （需要css配合，暂不实现）
      // 记录两列的高度
      // 前 列数个，直接放在高度数组
      // 下面比较高度数组的高度，放在最小的项里面
      // 更新高度数组
      // 重复比较高度
      setTimeout(() => {
        const column = 2
        let cList = []
        // 所有元素
        let refs = this.$refs
        // 当前元素下标
        let count = 0
        let cur = refs['goods_item0'][0]
        console.log(cur)
        do {
          console.log(cur.offsetHeight)
          // 首行
          if (count < column) {
            cList.push(cur.offsetHeight)
          } else {
            let index = Array.prototype.findIndex.call(cList, v => v === Math.min(...cList))
            cList[index] = cList[index] + cur.offsetHeight
          }
          count++
          cur = refs['goods_item' + count] ? refs['goods_item' + count][0] : ''
        } while (cur)
        console.log(cList)
      }, 1000)
    })
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
