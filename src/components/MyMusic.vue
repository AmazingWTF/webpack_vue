<template>
  <div class="music">
    <Heads></Heads>
    <Foots></Foots>
    music.vue
  </div>
</template>

<script>
import Heads from './common/Heads.vue'
import Foots from './common/Foots.vue'
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
    Heads,
    Foots
  }
}
</script>

<style lang="">

</style>
