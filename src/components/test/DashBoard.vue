<template>
  <div class="dashboard">
    dashboard.vue
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'dashboard.vue msg'
    }
  },
  created () {
    console.log('dashboard create')
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
  .dashboard {
    background-color: lightblue;
  }
</style>
