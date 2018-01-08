<template>
  <div class="songs">
    <div class="banner_wrap">
      <ul class="banner">
        <li>
          <img :src="banner[2]" />
        </li>
      </ul>
      <ul class="cornerMark">
        <li v-for="item of banner"></li>
      </ul>
    </div>

    <ul class="dashBoard">
      <router-link to="/" tag="li">
        <div class="icon-fm media">

        </div>
        <div class="brief">私人fm</div>
      </router-link>
      <router-link to="/" tag="li">
        <div class="icon-test media">

        </div>
        <div class="brief">每日推荐</div>
      </router-link>
      <router-link to="/" tag="li">
        <div class="icon-skin media">

        </div>
        <div class="brief">歌单</div>
      </router-link>
      <router-link to="/" tag="li">
        <div class="icon-settime media">

        </div>
        <div class="brief">排行榜</div>
      </router-link>
    </ul>

    <div class="recommand">
      <div class="title">
        <div class="word">推荐歌单</div>
        <div class="icon-rightArrow arrow"></div>
      </div>
      <ul class="recommand_list clearFix">
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/rA3DoMLFgu3zpnrrlW2q1Q==/19145795974992521.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">民谣200首 【精选】</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/fCM2Y2_pKfIih1DwbVqQAg==/109951162983782334.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/rA3DoMLFgu3zpnrrlW2q1Q==/19145795974992521.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/fCM2Y2_pKfIih1DwbVqQAg==/109951162983782334.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/rA3DoMLFgu3zpnrrlW2q1Q==/19145795974992521.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/fCM2Y2_pKfIih1DwbVqQAg==/109951162983782334.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
      </ul>
    </div>

    <div id="mv" class="recommand">
      <div class="title">
        <div class="word">推荐歌单</div>
        <div class="icon-rightArrow arrow"></div>
      </div>
      <ul class="recommand_list clearFix">
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/rA3DoMLFgu3zpnrrlW2q1Q==/19145795974992521.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">民谣200首 【精选】</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/fCM2Y2_pKfIih1DwbVqQAg==/109951162983782334.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/rA3DoMLFgu3zpnrrlW2q1Q==/19145795974992521.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/fCM2Y2_pKfIih1DwbVqQAg==/109951162983782334.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/rA3DoMLFgu3zpnrrlW2q1Q==/19145795974992521.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
        <li class="fl">
          <img class="cover" src="http://p1.music.126.net/fCM2Y2_pKfIih1DwbVqQAg==/109951162983782334.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" />
          <p class="detail">【世界杯】 2018 目标莫斯科</p>
          <div class="icon-bofang count"> 233万</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        banner: [
          'http://p1.music.126.net/p7-jnbX8-3DHhpUlXMzQSg==/109951163099039454.jpg',
          'http://p1.music.126.net/gMbIT43nzQ-KlsdVwcS22w==/109951163098993364.jpg',
          'http://p1.music.126.net/B8LYkhNWoqNUvaeuU-gNkw==/109951163098475610.jpg',
          'http://p1.music.126.net/iybJ3sVLB28jwqc9xegDDg==/109951163098493350.jpg'
        ]
      }
    },
    created () {
      console.log(this.$route)
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/common/less/mixin.less';
  .songs {
    padding-bottom: 40px;
    width: 100%;
    .banner_wrap {
      position: relative;
      .banner {
        li {
          img {
            width: 100%;
          }
        }
      }
      .cornerMark {
        display: flex;
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translate(-50%, 0);
        li {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: 0 5px;
          background: rgba(180, 180, 180, .3);
        }
      }
    }

    .dashBoard {
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      color: #000;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      li {
        text-align: center;
        .media {
          border: 1px solid #ea3328;
          color: #ea3328;
          font-size: 25px;
          padding: 10px;
          border-radius: 50%;
        }
        .brief {
          padding-top: 3px;
        }
      }
    }

    .recommand {
      .title {
        font-size: 14px;
        position: relative;
        padding: 15px 0 10px 10px;
        line-height: 1;
        display: flex;
        .arrow {
          font-size: 18px;
          line-height: .9;
        }
        &::before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 15px;
          height: 14px;
          width: 2px;
          background-color: @bg-red;
        }
      }
      .recommand_list {
        flex-wrap: wrap;
        li {
          position: relative;
          flex: 4;
          width: 33.3%;
          line-height: 1.2;
          &:nth-child(3n + 1) {
            padding-right: 2px;
          }
          &:nth-child(3n + 2) {
            padding: 0 1px;
          }
          &:nth-child(3n) {
            padding-left: 2px;
          }
          p {
            font-size: 13px;
            padding: 6px 2px 0 6px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .count {
            position: absolute;
            right: 0;
            top: 0;
            color: #fff;
            font-size: 12px;
            padding: 3px 4px;
          }
        }
      }
      &#mv {
        .recommand_list {
          &:nth-child(odd) {
            color: red;
            padding: 0 1px 16px 0;
          }
          &:nth-child(even) {
            padding: 0 0 16px 1px;
          }
          li {
            width: 50%;
            .detail {
              padding: 6px 2px 0 0;
            }
          }
        }
      }
    }
  }
</style>
