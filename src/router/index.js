import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexSongs from '@/components/Index/Songs'
import IndexVideos from '@/components/Index/Videos'
import IndexFM from '@/components/Index/FM'
import MyFriends from '@/components/MyFriends'
import MyMusic from '@/components/MyMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'songs'
        },
        {
          path: 'songs',
          name: 'songs',
          component: IndexSongs
        },
        {
          path: 'videos',
          name: 'videos',
          component: IndexVideos
        },
        {
          path: 'fm',
          name: 'fm',
          component: IndexFM
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
