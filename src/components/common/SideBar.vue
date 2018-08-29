<template>
  <Popup v-model="mask_show" width="80%" is-transparent position="left" >
    <div class="tabBar">
      <div class="wrapper">
        <div class="my_info">
          <img class="avatar" src="http://p3.music.126.net/wOPVWRdY3qC8Lgfsa9CGAg==/3441471409337079.jpg" />

          <div class="words">
            <div class="my_detail">
              <div class="name">账号已注销</div>
              <i class="level">lv.8</i>
            </div>
            <div class="register">
              签到>
            </div>
          </div>
        </div>

        <ul class="nav_lists">
          <li tag="li">
            <div class="icon-news icon">
            </div>
            <div class="title">
              我的消息
            </div>
          </li>
          <li tag="li">
            <div class="icon-vip icon">
            </div>
            <div class="title">
              会员中心
            </div>
          </li>
          <li tag="li">
            <div class="icon-store icon">
            </div>
            <div class="title">
              商城
            </div>
          </li>
          <li tag="li">
            <div class="icon-test icon">
            </div>
            <div class="title">
              在线听歌免流量
            </div>
          </li>
          <li class="mt" to="/" tag="li">
            <div class="icon-concat icon">
            </div>
            <div class="title">
              我的好友
            </div>
          </li>
          <li tag="li">
            <div class="icon-near icon">
            </div>
            <div class="title">
              附近的人
            </div>
          </li>
          <li class="mt both" to="/" tag="li">
            <div class="tag">
              <div class="icon-skin icon">
              </div>
              <div class="title">
                个性换肤
              </div>
            </div>
            <div class="val">官方红</div>
          </li>
          <li tag="li">
            <div class="icon-listen icon">
            </div>
            <div class="title">
              听歌识曲
            </div>
          </li>
          <li tag="li">
            <div class="icon-settime icon">
            </div>
            <div class="title">
              定时停止播放
            </div>
          </li>
          <li tag="li">
            <div class="icon-test icon">
            </div>
            <div class="title">
              扫一扫
            </div>
          </li>
          <li tag="li">
            <div class="icon-news icon">
            </div>
            <div class="title">
              音乐闹钟
            </div>
          </li>
          <li tag="li">
            <div class="icon-news icon">
            </div>
            <div class="title">
              驾驶模式
            </div>
          </li>
          <li tag="li">
            <div class="icon-news icon">
            </div>
            <div class="title">
              音乐云盘
            </div>
          </li>
        </ul>
      </div>

      <ul class="tool_bar">
        <li tag="li">
          <div class="icon-night icon">
          </div>
          <div class="title">
            夜间模式
          </div>
        </li>
        <li class="setting" to="/" tag="li">
          <div class="icon-setting icon">
          </div>
          <div class="title">
            设置
          </div>
        </li>
        <li tag="li">
          <div class="icon-exit icon">
          </div>
          <div class="title">
            退出
          </div>
        </li>
      </ul>
    </div>
  </Popup>
</template>

<script>
import { mapActions } from 'vuex'
import { Popup } from 'vux'

export default {
  name: 'SideBar',
  data () {
    return {
      testShow: false
    }
  },
  computed: {
    mask_show: {
      get () {
        return this.$store.state.app.mask_show
      },
      set (bol) {
        this.showSideBar(bol)
      }
    }
  },
  methods: {
    ...mapActions([
      'showSideBar'
    ])
  },
  components: {
    Popup
  }
}
</script>

<style lang="less" scoped>
  .tabBar {
    display: inline-block;
    position: relative;
    // z-index: 10;
    width: 100%;
    background-color: #fff;
    height: 100%;
    padding-bottom: 37px;
    ul > li {
      display: flex;
      .tag {
        display: flex;
      }
      .icon {
        line-height: 2.5;
      }
      .title {
        padding-left: 10px;
        line-height: 2.5;
      }
    }
    .wrapper {
      overflow-y: scroll;
      height: 100%;
      .my_info {
        padding: 80px 10px 0;
        height: 180px;
        background-color: #ddd;
        background-image: url('bg.jpg');
        background-size: 100% 100%;
        .avatar {
          width: 60px;
          border-radius: 50%;
        }
        .words {
          padding-top: 8px;
          display: flex;
          color: #fff;
          .my_detail {
            display: flex;
            flex: 1;
            .name {
              font-size: 14px;
              padding-right: 5px;
            }
            .level {
              display: block;
              font-size: 12px;
              padding: 0 3px;
              box-sizing: content-box;
              height: 1em;
              border: 1px solid #fff;
              border-radius: 7px;
              margin-top: 3px;
            }
          }

          .register {
            font-size: 12px;
            border: 1px solid #fff;
            box-sizing: content-box;
            padding: 0 6px;
            border-radius: 12px;
          }
        }
      }

      .nav_lists {
        background-color: #f4f4f4;
        // flex: 1;
        // padding-bottom: 37px;
        box-sizing: border-box;
        font-size: 16px;
        li {
          padding: 0 10px;
          background-color: #fff;

        }
        .mt {
          margin-top: 4px;
          .tag {

          }
          .val {
            font-size: 12px;
            color: #bbb;
            line-height: 2.5 * 16px;
          }
        }
        .both {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .tool_bar {
      background-color: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      font-size: 14px;
      display: flex;
      height: 36px;
      border-top: 1px solid #eee;
      li {
        padding: 0 10px;
        line-height: 36px;
      }
      .setting {
        flex: 1;
        display: flex;
        justify-content: center;
      }
    }

  }
</style>
