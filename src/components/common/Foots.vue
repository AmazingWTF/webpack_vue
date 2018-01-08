<template>
  <div class="footer">
    <div class="cover_img">
      <img src="./logo.png" />
    </div>

    <div class="contorller">
      <div class="detail">
        <p class="songName">
          消愁
        </p>
        <p class="artist">
          毛不易
        </p>
      </div>

      <div class="btns">
        <div class="play">
          <span class="corner"></span>
        </div>

        <div class="icon-bread playList">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  @import '../../assets/common/less/mixin.less';
  @import '../../assets/fonts/iconfont.css';
  .footer {
    width: 100%;
    height: 40px;
    background-color: #fff;
    padding: 5px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    .cover_img {
      height: 30px;
      width: 30px;
    }
    .contorller {
      padding-left: 5px;
      flex: 1;
      display: flex;
      .detail {
        flex: 1;
        .songName {
          font-size: 13px;
          color: #333;
        }
        .artist {
          transform: scale(.9) translateX(-6%);
          width: 100%;
          font-size: 12px;
          color: #999;
        }
      }

      .btns {
        display: flex;
        .play {
          height: 30px;
          width: 30px;
          border: 2px solid #bbb;
          border-radius: 50%;
          margin: 0 20px 0 0;
          .corner {
            position: relative;
            display: block;
            height: 100%;
            width: 40px;
            margin-right: 30px;
          }
          .corner::before,
          .corner::after {
            display: block;
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            box-sizing: border-box;
          }
          .corner::before {
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-right: 11px solid transparent;
            border-left: 11px solid #bbb;
          }
          .corner::after {
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-right: 10px solid transparent;
            border-left: 10px solid #fff;
          }
        }

        .playList {
          font-size: 24px;
          color: #bbb;
          line-height: 30px;
        }
      }
    }
  }
</style>
