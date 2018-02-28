import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
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
      }
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

export default router
