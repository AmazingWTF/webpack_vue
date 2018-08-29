<template>
  <div class="test">
    hshhhh<p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style lang="less">

</style>
