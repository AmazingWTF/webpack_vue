<template>
  <div class="dashboard" @click="changeMessage">
    dashboard.vue
    <br>
    <span style="font-weight:700">{{ info }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'dashboard.vue msg',
      inheritInfo: ''
    }
  },
  props: {
    info: String
  },
  watch: {
    inheritInfo (newVal, oldVal) {
      this.$emit('update:info', newVal)
    }
  },
  created () {
    console.log('dashboard create')
  },
  methods: {
    changeMessage () {
      this.inheritInfo += '>>>changed<<<'
    }
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
