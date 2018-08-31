<template>
  <div class="content">
    content.vue
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'content.vue msg'
    }
  },
  created () {
    console.log('content create')
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
