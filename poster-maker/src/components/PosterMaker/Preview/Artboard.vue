<template>
<div
  id="artboard"
  :class="getRatio"
  :style="{
    background: selectedColor.baseColor,
    color: selectedColor.fontColor
  }"
>
  <div
    class="elements"
    :style="{
      fontFamily: selectedFont.family,
      textAlign: selectedLayout,
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
    ]),
    getRatio() {
      switch(this.selectedArtboard.ratio) {
        case '1:1':
          return 'square'
        case '9:16':
          return 'portrait'
        case '16:9':
          return 'landscape'
      }
    }
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

  &.square {
    width: 500px;
    height: 500px;
  }

  &.portrait {
    width: 279px;
    height: 496px;
  }

  &.landscape {
    width: 496px;
    height: 279px;
  }

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