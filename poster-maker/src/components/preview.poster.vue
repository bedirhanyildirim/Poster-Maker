<template>
<div id="preview-poster">
  <div id="preview-container">
    <!--canvas id="preview-canvas" height="500" width="500"></canvas-->
    <div id="preview-div">
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
      <a @click="randomBlobs(blobCount)" class="random-button">Random</a>
    </div>
  </div>
</div>
</template>

<script>
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
      blobArray: []
    }
  },
  mounted() {
    this.randomBlobs(this.blobCount)
  },
  methods: {
    createBlob: function () {
      let wh = Math.floor(Math.random() * 200 + 200)
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
      blob.style.top = Math.floor(Math.random() * (500 - wh + (wh/2))) + 'px'
      blob.style.left = Math.floor(Math.random() * (500 - wh + (wh/2))) + 'px'
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
    }
  }
}
</script>

<style lang="scss">
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
    flex-direction: column;
    justify-content: center;

    #previewCanvas {
      width: 500px;
      height: 500px;
      position: relative;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
    }
    #preview-div {
      width: 500px;
      height: 500px;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);

      .title {
        z-index: 2;
        width: 100%;
        font-size: 48px;
        font-weight: 700;
        padding: 0 16px 24px 32px;
      }
      .subject {
        z-index: 2;
        width: 100%;
        font-size: 24px;
        font-weight: 500;
        padding: 0 16px 24px 32px;
      }
      .date {
        z-index: 2;
        width: 100%;
        font-size: 20px;
        padding: 8px 32px;
        font-weight: 300;
      }
      .time {
        z-index: 2;
        width: 100%;
        font-size: 20px;
        padding: 0 16px 40px 32px;
        font-weight: 300;
      }
      .location {
        z-index: 2;
        width: 100%;
        font-size: 20px;
        text-align: left;
        padding: 0 16px 16px 32px;
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
      min-width: 100px;
      margin-top: 16px;

      .random-button {
        width: 100%;
        outline: none;
        color: #ffffff;
        cursor: pointer;
        font-size: 14px;
        appearance: none;
        font-weight: 500;
        line-height: 24px;
        padding: 8px 16px;
        text-align: center;
        border-radius: 8px;
        display: inline-block;
        box-sizing: border-box;
        background-color: #303030;
        transition: all 200ms ease;
        font-family: '.AppleSystemUIFont';

        &:hover {
          background-color: #000000;
        }
      }
    }
  }
}
</style>