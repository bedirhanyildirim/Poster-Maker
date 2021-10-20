import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Homepage'),
    meta: {
      title: 'Welcome'
    }
  },
  {
    path: '/poster-maker',
    name: 'PosterMaker',
    component: () => import('@/pages/PosterMaker'),
    meta: {
      title: 'Poster Maker'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/404'),
    meta: {
      title: 'Not found'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  next()
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
