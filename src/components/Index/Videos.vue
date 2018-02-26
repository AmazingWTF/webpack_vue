<template>
  <div class="videos">
    <canvas class="can" id="can"></canvas>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {
      let can = document.querySelector('#can')
      console.log(can.id)

      let ctx = can.getContext('2d')

      ctx.beginPath()
      ctx.fillStyle = 'yellow'
      ctx.moveTo(0, 0)
      ctx.lineTo(0, 100)
      ctx.lineTo(100, 100)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.lineWidth = 3
      ctx.strokeStyle = 'red'
      ctx.moveTo(-1, 0)
      ctx.lineTo(-1, 101)
      ctx.lineTo(101, 101)
      ctx.closePath()
      ctx.stroke()
    },
    created () {
      console.log('/index/videos created ')
    }
  }
</script>

<style lang="less" scoped>
  canvas {
    display: block;
    margin: 30px auto 0;
    border: 1px solid #000;
  }
</style>
