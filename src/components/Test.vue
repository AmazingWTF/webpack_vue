<template>
  <div class="test">
    hshhhh<p>{{msg}}</p>
    <Content v-bind:info.sync="sharedInfo" />
    <DashBoard v-bind:info.sync="sharedInfo" />
  </div>
</template>

<script>
import Content from './test/Content'
import DashBoard from './test/DashBoard'
export default {
  data () {
    return {
      sharedInfo: 'test.vue message'
    }
  },
  computed: {
    msg () {
      return this.message
    }
  },
  props: {
    message: String
  },
  created () {
    console.log('Test create')
    console.log(this.message)
  },
  activated: function () {
  },
  components: {
    Content,
    DashBoard
  }
}
</script>

<style lang="less">

</style>
