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
      'selectedArtboard'
    ])
  }
}
</script>

<style lang="scss" scoped>
#artboard {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .18);

  .elements {
    width: 100%;
    box-sizing: border-box;

    #title, #subject, #date, #time, #location {
      margin: 0 32px;
      font-size: 1.2em;
    }

    #title {
      font-size: 2.8em;
      line-height: 1.2em;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    #subject {
      font-weight: bold;
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
}
</style>