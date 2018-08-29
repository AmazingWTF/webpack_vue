import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyFriends from '@/components/MyFriends'
import MyMusic from '@/components/MyMusic'

import IndexSongs from '@/components/Index/Songs'
import IndexVideos from '@/components/Index/Videos'

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
      component: MyFriends,
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
  ]
})

export default router
