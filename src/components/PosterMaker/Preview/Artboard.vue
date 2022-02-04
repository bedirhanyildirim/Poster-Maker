<template>
<div
  id="artboard"
  v-if="this.selectedArtboard"
  :style="{
    width: this.selectedArtboard.previewWidth + 'px',
    height: this.selectedArtboard.previewHeight + 'px',
    background: this.selectedColor.baseColor,
    color: this.selectedColor.fontColor,
  }"
>
  <div class="background">
    <div id="blobs-preview">
      <div v-for="b of this.blobs" v-html="setBlobForPreview(b).outerHTML">
      </div>
    </div>
  </div>
  <div
    class="elements"
    :style="{
      fontFamily: this.selectedFont.family,
      textAlign: this.selectedLayout,
    }"
  >
    <div id="title">
      {{ title }}
    </div>
    <div id="subject">
      {{ subject }}
    </div>
    <div id="date">
      {{ date }}
    </div>
    <div id="time">
      {{ time }}
    </div>
    <div id="location">
      {{ location }}
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState('posterMaker', [
      'title',
      'subject',
      'date',
      'time',
      'location',
      'selectedColor',
      'selectedLayout',
      'selectedFont',
      'selectedArtboard',
      'blobs'
    ]),
    getSmallerSide() {
      if (this.selectedArtboard.previewWidth > this.selectedArtboard.previewHeight ){
        return this.selectedArtboard.previewHeight
      }
      return this.selectedArtboard.previewWidth
    }
  },
  methods: {
    setBlobForPreview(blob) {
      blob.style.position = 'absolute'
      blob.style.backgroundColor = this.selectedColor.fontColor
      let wh = Math.floor(blob.randomWH * (this.getSmallerSide / 5 * 3) + (this.getSmallerSide / 5 * 2))
      blob.style.width = wh + 'px'
      blob.style.height = wh + 'px'
      blob.style.top = Math.floor(blob.randomVerticalAlign * this.selectedArtboard.previewHeight) - (wh/2) + 'px'
      blob.style.left = Math.floor(blob.randomHorizontalAlign * this.selectedArtboard.previewWidth) - (wh/2) + 'px'
      return blob
    }
  }
}
</script>

<style lang="scss" scoped>
#artboard {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .18);

  .elements {
    z-index: 2;
    width: 100%;
    box-sizing: border-box;

    #title, #subject, #date, #time, #location {
      margin: 0 32px;
      font-size: 1.2em;
    }

    #title {
      font-size: 2.8em;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    #subject {
      margin-bottom: 2rem;
    }
    #date {
      font-weight: normal;
      margin-bottom: 1rem;
    }
    #time {
      font-weight: normal;
      margin-bottom: 2rem;
    }
    #location {
      font-weight: normal;
    }
  }
  .background {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;

    #blobs-preview {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      overflow: hidden;
      position: absolute;
    }
  }
}
</style>