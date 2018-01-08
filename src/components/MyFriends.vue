<template>
  <div class="friends">
    <Heads></Heads>
    <Foots></Foots>
    friends.vue
  </div>
</template>

<script>
  import Heads from './common/Heads.vue'
  import Foots from './common/Foots.vue'
  export default {
    data () {
      return {
        msg: 'MyFriends.vue msg'
      }
    },
    components: {
      Heads,
      Foots
    }
  }
</script>

<style lang="">

</style>
