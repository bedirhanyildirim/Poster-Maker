<template>
<div id="preview-poster">
  <div id="preview-container">
    <!--canvas id="preview-canvas" height="500" width="500"></canvas-->
    <div id="preview-div">
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
      vueCanvas: null
    }
  },
  watch: {
    title: function(e) {
      //this.draw(e)
    }
  },
  mounted() {
    //let c = document.getElementById('preview-canvas')
    //let ctx = c.getContext('2d')
    //this.vueCanvas = ctx
  },
  methods: {
    draw: function (e){
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
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
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
    }
    #preview-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: 500px;
      height: 500px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.18);

      .title {
        width: 100%;
        font-size: 48px;
        font-weight: 700;
        padding: 0 16px 24px 32px;
      }
      .subject {
        width: 100%;
        font-size: 24px;
        font-weight: 500;
        padding: 0 16px 24px 32px;
      }
      .date {
        width: 100%;
        font-size: 20px;
        padding: 8px 32px;
        font-weight: 300;
      }
      .time {
        width: 100%;
        font-size: 20px;
        padding: 0 16px 40px 32px;
        font-weight: 300;
      }
      .location {
        width: 100%;
        font-size: 20px;
        padding: 0 16px 16px 32px;
        text-align: left;
      }
    }
  }
}
</style>