import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Homepage'),
    meta: {
      title: 'Welcome',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome to my jungle! bedirhan.design is my playground, I try new design tricks here. You may find something interesting in..'
        },
        {
          property: 'og:description',
          content: 'Welcome to my jungle! bedirhan.design is my playground, I try new design tricks here. You may find something interesting in..'
        }
      ]
    }
  },
  {
    path: '/poster-maker',
    name: 'PosterMaker',
    component: () => import('@/pages/PosterMaker'),
    meta: {
      title: 'Poster Maker',
      metaTags: [
        {
          name: 'description',
          content: 'Easiest way of poster design. Try Poster Maker now!'
        },
        {
          property: 'og:description',
          content: 'Easiest way of poster design. Try Poster Maker now!'
        }
      ]
    }
  },
  {
    path: '/poster-maker/app',
    name: 'PosterMakerApp',
    component: () => import('@/components/PosterMaker/App'),
    meta: {
      title: 'Create Poster Now!',
      metaTags: [
        {
          name: 'description',
          content: 'Easiest way of poster design. Try Poster Maker now!'
        },
        {
          property: 'og:description',
          content: 'Easiest way of poster design. Try Poster Maker now!'
        }
      ]
    }
  },
  {
    path: '/image-cropper',
    name: 'ImageCropper',
    component: () => import('@/pages/ImageCropper'),
    meta: {
      title: 'Image Cropper',
      metaTags: [
        {
          name: 'description',
          content: 'Simple image cropper on your browser. Crop your image right now.'
        },
        {
          property: 'og:description',
          content: 'Simple image cropper on your browser. Crop your image right now.'
        }
      ]
    }
  },
  {
    path: '/webcam',
    name: 'Webcam',
    component: () => import('@/pages/Webcam'),
    meta: {
      title: 'Webcam',
      //TODO: edit description
      metaTags: [
        {
          name: 'description',
          content: 'Simple image cropper on your browser. Crop your image right now.'
        },
        {
          property: 'og:description',
          content: 'Simple image cropper on your browser. Crop your image right now.'
        }
      ]
    }
  },
  {
    path: '/webcam/app',
    name: 'Webcam App',
    component: () => import('@/components/Webcam/App'),
    meta: {
      title: 'Webcam App',
      //TODO: edit description
      metaTags: [
        {
          name: 'description',
          content: 'Simple image cropper on your browser. Crop your image right now.'
        },
        {
          property: 'og:description',
          content: 'Simple image cropper on your browser. Crop your image right now.'
        }
      ]
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/404'),
    meta: {
      title: 'Not found',
      metaTags: [
        {
          name: 'description',
          content: 'Ops! Looks like something went wrong..'
        },
        {
          property: 'og:description',
          content: 'Ops! Looks like something went wrong..'
        }
      ]
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

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  to.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  }).forEach(tag => document.head.appendChild(tag));

  next()
})

export default router
