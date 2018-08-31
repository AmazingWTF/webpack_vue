<template>
  <div class="friends">
    friends.vue
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'MyFriends.vue msg'
    }
  },
  created () {
    console.log('friends create')
  },
  components: {
  }
}
</script>

<style lang="less">
.friends {
  flex: 1;
}
</style>
