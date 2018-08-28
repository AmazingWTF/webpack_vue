<template>
  <div class="videos">
    <ul class="video-list">
      <li
        v-for="(item, index) in videoList"
        :key="index"
        class="video-item">
        <img class="video-avator" :src="item.images.small" />
        <div class="video-detail">
          <p>{{item.title}}</p>
          <p>上映时间：<span class="yellow">{{item.year}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '@/api/api'

  export default {
    data () {
      return {
        videoList: []
      }
    },
    created () {
      let _this = this
      api.getInTheathersMovie({
        city: '上海'
      })
        .then(res => {
          console.log(res)
          _this.videoList = [...res.data.subjects]
        })
    },
    activated () {
      console.log('activated')
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
.video-list {

}

.video-item {
  display: flex;
}

.video-avator {
  width: 80px;
  height: 120px;
}

.video-detail {
  flex: 1;
}
</style>
