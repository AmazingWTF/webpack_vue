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

router.beforeEach((to, from, next) => {
  // 全局导航守卫
  // console.log('router guide')
  // console.log('to', to)
  // console.log('from', from)
  next()
})

export default router
