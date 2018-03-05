<template>
  <SearchTab />
</template>

<script>
  import SearchTab from '@/components/common/Search/SearchTab'
  export default {
    data () {
      return {
      }
    },
    created () {
      console.log('result created')
    },
    components: {
      SearchTab
    }
  }
</script>

<style lang="less" scoped>

</style>
