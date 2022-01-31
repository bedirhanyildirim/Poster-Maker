<template>
<div id="header">
  <div class="logo">
    <router-link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="220 200 350 350">
        <defs>
          <linearGradient id="linear-gradient" x1="0.914" y1="0.834" x2="0.419" y2="0.387" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#ddd"/>
            <stop offset="1" stop-color="#b2afaf"/>
          </linearGradient>
          <filter id="Path_27" x="207.182" y="261.823" width="103.023" height="104.338" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <radialGradient id="radial-gradient" cx="0.318" cy="0.183" r="0.872" gradientTransform="matrix(0.252, 0.968, -0.568, 0.148, 0.342, -0.152)" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#727272"/>
            <stop offset="1" stop-color="#717171"/>
          </radialGradient>
          <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#efefef"/>
            <stop offset="0.5" stop-color="#f7f7f7"/>
            <stop offset="1" stop-color="#e3e3e3"/>
          </linearGradient>
          <linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2="0.682" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#727272"/>
            <stop offset="1" stop-color="#393939"/>
          </linearGradient>
          <linearGradient id="linear-gradient-4" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#797979"/>
            <stop offset="1" stop-color="#414141"/>
          </linearGradient>
          <clipPath id="clip-poster-maker">
            <rect width="768" height="768"/>
          </clipPath>
        </defs>
        <g id="poster-maker" clip-path="url(#clip-poster-maker)">
          <g id="paper" transform="matrix(0.891, -0.454, 0.454, 0.891, -284.697, 150.934)">
            <path id="Subtraction_7" data-name="Subtraction 7" d="M202.494,281.579H26a25.978,25.978,0,0,1-26-26V87A87.849,87.849,0,0,1,1.269,72.114l35.9-26.571L67.582,2.175A87.488,87.488,0,0,1,87,0h57.495a84.621,84.621,0,0,1,16.929,1.707,83.538,83.538,0,0,1,30.036,12.639A84.245,84.245,0,0,1,221.893,51.3a83.578,83.578,0,0,1,4.894,15.768A84.62,84.62,0,0,1,228.494,84v171.58a25.978,25.978,0,0,1-26,26Z" transform="translate(376.698 352.206)" fill="#bababa"/>
            <g transform="matrix(0.89, 0.45, -0.45, 0.89, 322.19, -5.23)" filter="url(#Path_27)">
              <path id="Path_27-2" data-name="Path 27" d="M66.936,10.073s-6.383,21.1.483,52.519c-.007,4.868,1.212,7.547-2.312,10.7s-6.216,2.193-11.786,1.9C25.857,66.768.958,79.741.958,79.741Z" transform="matrix(0.89, -0.45, 0.45, 0.89, 207.76, 286.55)" fill="url(#linear-gradient)"/>
            </g>
          </g>
          <g id="pict" transform="matrix(0.914, 0.407, -0.407, 0.914, 354.903, 236.184)">
            <path id="Rectangle_103" data-name="Rectangle 103" d="M10,0h92a10,10,0,0,1,10,10V23A34,34,0,0,1,78,57H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z" transform="translate(109 21)" fill="url(#radial-gradient)"/>
            <rect id="Rectangle_100" data-name="Rectangle 100" width="211" height="67" rx="31" fill="url(#linear-gradient-2)"/>
            <rect id="Rectangle_101" data-name="Rectangle 101" width="14" height="118" transform="translate(98 67)" fill="url(#linear-gradient-3)"/>
            <path id="Rectangle_102" data-name="Rectangle 102" d="M22,0H38A22,22,0,0,1,60,22v97a26,26,0,0,1-26,26H26A26,26,0,0,1,0,119V22A22,22,0,0,1,22,0Z" transform="translate(75 131)" fill="url(#linear-gradient-4)"/>
          </g>
        </g>
      </svg>
    </router-link>
  </div>
  <div class="navigation">
    <div class="border active">
      <router-link to="/poster-maker">Poster Maker</router-link>
    </div>
    <div class="border">
      <router-link to="/image-cropper">Image Cropper</router-link>
    </div>
  </div>
  <div class="download">
    <a @click="download" class="icon-button download-button">
      <span class="material-icons">
        download
      </span>
    </a>
  </div>
</div>
</template>

<script>
import c2h from '@/assets/scripts/html2canvas'
import { mapState } from 'vuex'

export default {
  computed: {
    data() {
      return {
        ctx: undefined,
        img: undefined
      }
    },
    ...mapState('posterMaker', ['title', 'selectedArtboard']),
    getScale() {
      return this.selectedArtboard.scale
    },
    getWidth() {
      return this.selectedArtboard.previewWidth
    },
    getHeight() {
      return this.selectedArtboard.previewHeight
    },
    getName() {
      let lowerCased = this.title.toLowerCase()
      let deletedWhiteSpace = lowerCased.replace(/\s/g, '_')
      return deletedWhiteSpace
    }
  },
  methods: {
    download() {
      c2h(document.getElementById('artboard'), {
        scale: this.getScale,
        width: this.getWidth,
        height: this.getHeight,
        useCORS: true,
        logging: false,
        allowTaint: true,
        letterRendering: true,
      }).then(canvas => {
        this.ctx = canvas.getContext('2d')
        this.ctx.imageSmoothingEnabled = true
        this.ctx.imageSmoothingQuality = 'high'
        this.ctx.mozImageSmoothingEnabled = true
        this.ctx.webkitImageSmoothingEnabled = true
        this.img = canvas.toDataURL('image/png')

        const link = document.createElement('a')
        link.href = this.img.replace('image/png', 'image/octet-stream')
        link.download = this.getName + '_' + Date.now() + '.png'
        link.click()
        URL.revokeObjectURL(link.href)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  display: flex;
  background-color: #F7F7F7;
  justify-content: flex-start;
  border-bottom: 2px solid #E4E4E4;

  .logo {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        width: 40px;
        height: 40px;
        display: block;

        #Rectangle_100 {
          fill: #f7f7f7;
          transition: fill 500ms ease-in-out;
        }
      }

      &:hover {
        svg {
          #Rectangle_100 {
            fill: #efefef;
          }
        }
      }
    }
  }
  .navigation {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .border {
      height: 100%;
      align-items: center;
      display: flex;
      margin-left: 32px;
      border-bottom: 2px solid #F7F7F7;
      transition: 200ms all ease-in-out;

      &.active {
        border-bottom-color: #505050;
      }

      &:hover {
        cursor: pointer;
        border-bottom-color: #505050;
        a {
          color: #505050;
        }
      }

      a {
        color: #9F9F9F;
        padding: 0 6px;
        font-size: 16px;
        transition: 300ms all ease-in-out;

        &.router-link-active {
          color: #505050;
        }
      }
    }
  }

  .download {
    width: 60px;
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;

    .download-button {
      display: flex;
      color: #666666;
      justify-content: center;
      transition: all 200ms ease;

      &:hover {
        cursor: pointer;
        color: #232323;
      }
    }
  }
}
</style>