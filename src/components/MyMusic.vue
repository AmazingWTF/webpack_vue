<template>
  <div class="music">
    music.vue
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'MyMusic.vue msg'
    }
  },
  created () {
    console.log('MyMusic create')
  },
  activated: function () {
    console.log('MyMusic has reused')
  },
  components: {
  }
}
</script>

<style lang="less">
.music {
  flex: 1;
}
</style>
