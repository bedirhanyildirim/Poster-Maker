import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.pages'
import PosterMaker from "@/pages/PosterMaker"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Welcome'
    }
  },
  {
    path: '/poster-maker',
    name: 'PosterMaker',
    component: PosterMaker,
    meta: {
      title: 'Poster Maker'
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
