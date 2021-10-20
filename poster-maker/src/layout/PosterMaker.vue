<template>
  <div id="poster-maker-layout">
    <Header></Header>
    <div id="content">
      <Sidebar></Sidebar>
      <div id="artboard">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/PosterMaker/Theme/Header'
import Sidebar from '@/components/PosterMaker/Theme/Sidebar'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#poster-maker-layout {
  background-color: #ffffff;

  #content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: calc(100vh - 60px);

    #artboard {
      flex-grow: 1;
    }
  }
}
</style>