import Vue from 'vue'
import Router from 'vue-router'

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
      component: resolve => require(['@/components/Index'], resolve),
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
          component: resolve => require(['@/components/Index/Songs'], resolve),
          name: 'songs',
          meta: {
            title: 'index/songs'
          }
        },
        {
          path: 'videos',
          component: resolve => require(['@/components/Index/Videos'], resolve),
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
        default: resolve => require(['@/components/MyFriends'], resolve),
        content: resolve => require(['@/components/test/Content'], resolve),
        dashboard: resolve => require(['@/components/test/DashBoard'], resolve)
      },
      meta: {
        title: 'friends'
      }
    },
    {
      path: '/music',
      name: 'MyMusic',
      component: resolve => require(['@/components/MyMusic'], resolve),
      meta: {
        title: 'MyMusic'
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require(['@/components/Test'], resolve),
      meta: {
        title: 'Test'
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
