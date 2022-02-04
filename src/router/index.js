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
    path: '/poster-maker/app',
    name: 'PosterMakerApp',
    component: () => import('@/components/PosterMaker/App'),
    meta: {
      title: 'Create Poster Now!'
    }
  },
  {
    path: '/image-cropper',
    name: 'ImageCropper',
    component: () => import('@/pages/ImageCropper'),
    meta: {
      title: 'Image Cropper'
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
