import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexSongs from '@/components/Index/Songs'
import IndexVideos from '@/components/Index/Videos'
import IndexFM from '@/components/Index/FM'
import MyFriends from '@/components/MyFriends'
import MyMusic from '@/components/MyMusic'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      name: 'index',
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: '',
          redirect: 'songs'
        },
        {
          path: 'songs',
          name: 'songs',
          component: IndexSongs,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'videos',
          name: 'videos',
          component: IndexVideos,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'fm',
          name: 'fm',
          component: IndexFM,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/friends',
      name: 'MyFriends',
      component: MyFriends
    },
    {
      path: '/music',
      name: 'MyMusic',
      component: MyMusic
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 全局导航守卫
  // console.log('router guide')
  // console.log('to', to)
  // console.log('from', from)
  next()
})

export default router
