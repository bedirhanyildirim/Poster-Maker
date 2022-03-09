<template>
<div id="webcamApp">
  <video autoplay id="videoElement"></video>
</div>
</template>

<script>
export default {
  mounted() {
    const video = document.querySelector("#videoElement")

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#webcamApp {
  margin: 0 auto;
  width: fit-content;
  border: 10px #333 solid;

  #videoElement {
    margin: 0;
    padding: 0;
    width: 960px;
    height: 720px;
    outline: none;
    vertical-align: middle;
    background-color: #666;
  }
}
</style>