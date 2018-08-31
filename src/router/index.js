import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyFriends from '@/components/MyFriends'
import MyMusic from '@/components/MyMusic'

import IndexSongs from '@/components/Index/Songs'
import IndexVideos from '@/components/Index/Videos'

import DashBoard from '@/components/test/DashBoard'
import Content from '@/components/test/Content'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      meta: {
        keepAlive: true,
        title: 'index'
      },
      children: [
        {
          path: '',
          redirect: 'songs'
        },
        {
          path: 'songs',
          component: IndexSongs,
          name: 'songs',
          meta: {
            title: 'index/songs'
          }
        },
        {
          path: 'videos',
          component: IndexVideos,
          name: 'videos',
          meta: {
            title: 'index/videos'
          }
        }
      ]
    },
    {
      path: '/friends',
      name: 'MyFriends',
      components: {
        default: MyFriends,
        content: Content,
        dashboard: DashBoard
      },
      meta: {
        title: 'friends'
      }
    },
    {
      path: '/music',
      name: 'MyMusic',
      component: MyMusic,
      meta: {
        title: 'MyMusic'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
