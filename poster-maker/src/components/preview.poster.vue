<template>
<div id="preview-poster">
  <div id="preview-container">
    <div id="preview-div" :class="this.getTextAlignment">
      <div class="blobs">
        <div v-for="b of this.blobArray" v-html="b.outerHTML"></div>
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="subject">
        {{ subject }}
      </div>
      <div class="date">
        {{ date }}
      </div>
      <div class="time">
        {{ time }}
      </div>
      <div class="location">
        {{ location }}
      </div>
    </div>
    <div class="row">
      <a class="icon-button ratio-button">
        <span>1:1</span>
      </a>
      <a @click="changeFontFamily" class="icon-button font-button" id="font-button">
        <span>Aa</span>
      </a>
      <a @click="randomBlobs(blobCount)" class="icon-button random-button">
        <span class="material-icons-outlined">
          casino
        </span>
      </a>
      <a @click="changeAlignment" class="icon-button alignment-button">
        <span class="material-icons-outlined">
          {{ this.alignments[this.alignment] }}
        </span>
      </a>
      <a class="icon-button color-button">
        <div class="color">
        </div>
      </a>
      <a @click.prevent="download" class="icon-button download-button">
        <span class="material-icons-sharp">
          download
        </span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import c2h from '../assets/scripts/html2canvas'
export default {
  name: 'preview.poster',
  props: {
    title: {
      required: true,
      type: String
    },
    subject: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: String
    },
    time: {
      required: true,
      type: String
    },
    location: {
      required: true,
      type: String
    }
  },
  data: function () {
    return {
      blobCount: 3,
      blobArray: [],
      previewArea: null,
      alignment: 0,
      alignments: ['align_horizontal_left', 'align_horizontal_center','align_horizontal_right'],
      fontFamily: 0,
      fontFamilies: ['Roboto', 'Oswald', 'Open Sans', 'Newsreader', 'Truculenta'],
      ctx: null,
      img: null
    }
  },
  mounted() {
    this.randomBlobs(this.blobCount)
    this.previewArea = document.getElementById('preview-div')
  },
  computed: {
    titleStyle: function () {
      return {
        zIndex: 2,
        width: '100%',
        fontSize: '48px',
        fontWeight: 700,
        fontVariant: 'normal',
        padding: '0 32px 24px 32px'
      }
    },
    getTextAlignment: function () {
      if (this.alignment == 0) {
        return 'text-left'
      }
      if (this.alignment == 1) {
        return 'text-center'
      }
      if (this.alignment == 2) {
        return 'text-right'
      }
    }
  },
  methods: {
    createBlob: function () {
      let wh = Math.floor(Math.random() * 300 + 200)
      let opacity = ((Math.random() * 8 + 7) / 100).toFixed(2)
      let percentage1 = Math.floor(Math.random() * 60 + 20)
      let percentage3 = Math.floor(Math.random() * 60 + 20)
      let percentage4 = Math.floor(Math.random() * 60 + 20)
      let percentage2 = Math.floor(Math.random() * 60 + 20)
      let percentage11 = 100 - percentage1
      let percentage21 = 100 - percentage2
      let percentage31 = 100 - percentage3
      let percentage41 = 100 - percentage4
      let borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`
      let blob = document.createElement('div')
      blob.classList.add('blob')
      blob.style.borderRadius = borderRadius
      blob.style.width = wh + 'px'
      blob.style.height = wh + 'px'
      blob.style.backgroundColor = `rgba(48,48,48,${opacity})`
      return blob
    },
    addBlob: function (blob) {
      let wh = blob.style.height.slice(0,-2)
      blob.style.top = Math.floor(Math.random() * 500) - (wh/2) + 'px'
      blob.style.left = Math.floor(Math.random() * 500) - (wh/2) + 'px'
      this.blobArray.push(blob)
    },
    randomBlobs: function (count) {
      this.clearBlobs()
      let counter = 0
      while (counter < count) {
        this.addBlob(this.createBlob())
        counter++
      }
    },
    clearBlobs: function () {
      this.blobArray = []
    },
    changeAlignment: function () {
      if (this.alignment < 2) {
        this.alignment++
      } else {
        this.alignment = 0
      }
    },
    changeFontFamily: function () {
      if (this.fontFamily < this.fontFamilies.length-1) {
        this.fontFamily++
      } else {
        this.fontFamily = 0
      }
      this.setFontFamily()
    },
    setFontFamily: function () {
      document.getElementById('preview-div').style.fontFamily = this.fontFamilies[this.fontFamily]
      document.getElementById('font-button').style.fontFamily = this.fontFamilies[this.fontFamily]
    },
    download: function () {
      c2h(document.getElementById('preview-div'), {
        scale: 2,
        width: 500,
        height: 500,
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
        link.download = this.title + '.png'
        link.click()
        URL.revokeObjectURL(link.href)
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');
@import url('https://fonts.googleapis.com/css?family=Newsreader:300,400,500,700,800&display=swap');
@import url('https://fonts.googleapis.com/css?family=Truculenta:300,400,500,700,900&display=swap');

.text-right {
  text-align: right!important;
}
.text-left {
  text-align: left!important;
}
.text-center {
  text-align: center!important;
}
#preview-poster {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  #preview-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;

    #previewCanvas {
      width: 500px;
      height: 500px;
      position: relative;
      font-variant: normal;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
    }
    #preview-div {
      width: 500px;
      height: 500px;
      display: flex;
      position: relative;
      font-variant: normal;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);

      .title {
        z-index: 2;
        width: 100%;
        font-size: 48px;
        font-weight: 800;
        overflow: hidden;
        white-space: normal;
        font-variant: normal;
        padding: 0 32px 24px 32px;
        text-transform: uppercase;
      }
      .subject {
        z-index: 2;
        width: 100%;
        font-size: 24px;
        font-weight: 600;
        font-variant: normal;
        padding: 0 32px 24px 32px;
      }
      .date {
        z-index: 2;
        width: 100%;
        font-size: 20px;
        font-weight: 300;
        padding: 8px 32px;
        font-variant: normal;
      }
      .time {
        z-index: 2;
        width: 100%;
        font-size: 20px;
        font-weight: 300;
        font-variant: normal;
        padding: 0 32px 40px 32px;
      }
      .location {
        z-index: 2;
        width: 100%;
        font-size: 20px;
        font-variant: normal;
        padding: 0 32px 16px 32px;
      }
      .blobs {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        overflow: hidden;
        position: absolute;

        .blob {
          min-width: 200px;
          min-height: 200px;
          display: block;
          position: absolute;
        }
      }
    }
    .row {
      height: 100%;
      display: flex;
      user-select: none;
      margin-right: 16px;
      flex-direction: column;
      justify-content: flex-end;

      .icon-button {
        padding: 8px;
        outline: none;
        display: flex;
        color: #ffffff;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        margin-bottom: 8px;
        border-radius: 50%;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        transition: all 200ms ease;

        &:hover {
          background-color: #efefef;
        }
        &:last-child {
          margin-bottom: 0;
        }

        span {
          color: #303030;
        }

        &.color-button {

          .color {
            width: 24px;
            height: 24px;
            display: block;
            border-radius: 50%;
            border: 2px solid #000000;
            background: linear-gradient(135deg, rgba(255,255,255,1) 25%, rgba(48,48,48,0.45) 75%);
          }
        }

        &.random-button {
          &:hover {
            span {
              animation: wobble-hor-bottom 1s cubic-bezier(0.645, 0.045, 0.355, 1.000) both;
            }
          }
        }

        &.ratio-button, &.font-button {
          span {
            width: 24px;
            height: 24px;
            display: flex;
            font-weight: 600;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
@keyframes wobble-hor-bottom {
   0%,
   100% {
     transform: translateX(0%);
     transform-origin: 50% 50%;
   }
   15% {
     transform: translateX(-3px) rotate(-6deg);
   }
   30% {
     transform: translateX(1.5px) rotate(6deg);
   }
   45% {
     transform: translateX(-1.5px) rotate(-3.6deg);
   }
   60% {
     transform: translateX(0.9px) rotate(2.4deg);
   }
   75% {
     transform: translateX(-0.6px) rotate(-1.2deg);
   }
 }
</style>