<template>
<div id="home">
  <div class="welcome-text">
    Here is going to be the homepage of <b>bedirhan.design</b>
  </div>
  <ul>
    <li><RouterLink to="/poster-maker">Go to Poster Maker</RouterLink></li>
    <li><RouterLink to="/image-cropper">Go to Image Cropper</RouterLink></li>
  </ul>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  b {
    margin-left: 4px;
    letter-spacing: 0;
  }

  .welcome-text {
    font-size: 24px;
    letter-spacing: 2px;
  }

  ul {
    display: flex;
    font-size: 20px;
    margin-top: 32px;
    align-items: center;
    flex-direction: row;

    li {
      a {
        color: #ccc;
        margin: 4px 8px;
        padding: 2px 4px;
        display: block;
        cursor: pointer;
        text-decoration: underline;
        transition: color 200ms ease;

        &:hover {
          color: #303030;
        }
      }
    }
  }
}
</style>