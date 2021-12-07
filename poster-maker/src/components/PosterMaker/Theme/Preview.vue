<template>
<div id="preview">
  <div class="artboard">
    <div class="elements">
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
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('posterMaker', [
        'title',
        'subject',
        'date',
        'time',
        'location'
    ])
  },
}
</script>

<style lang="scss" scoped>
#preview {
  display: flex;
  align-items: center;
  justify-content: center;

  .artboard {
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .18);

    .elements {
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
}
</style>