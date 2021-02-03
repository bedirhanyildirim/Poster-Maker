<template>
<div id="home">
  <div id="content">
    <header-theme></header-theme>
    <div id="form">
      <poster-form></poster-form>
    </div>
    <footer-theme></footer-theme>
  </div>
  <div id="preview">
    preview
  </div>
</div>
</template>

<script>
import HeaderTheme from '../themes/header.theme'
import FooterTheme from '../themes/footer.theme'
import PosterForm from '../components/form.poster'
export default {
  name: 'home.pages',
  components: { HeaderTheme, FooterTheme, PosterForm }
}
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  #content {
    width: 800px;
    background-color: #efefef;

    #form {
      padding: 48px;
      height: calc(100vh - 84px);
    }
  }
  #preview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>