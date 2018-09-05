<template>
  <div class="content" @click="changeMessage">
    content.vue
    <br>
    <span style="font-weight:700">{{ info }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'content.vue msg'
    }
  },
  props: {
    info: String
  },
  created () {
    console.log('content create')
  },
  methods: {
    changeMessage () {
      this.info += '>>>changed<<<'
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
  .content {
    background-color: pink;
  }
</style>
