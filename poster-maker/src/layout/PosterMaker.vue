<template>
  <div id="poster-maker-layout">
    <Header></Header>
    <div id="content">
      <ToolBar></ToolBar>
      <Preview id="preview"></Preview>
      <Artboards></Artboards>
    </div>
  </div>
</template>

<script>
import Header from '@/components/PosterMaker/Theme/Header'
import Sidebar from '@/components/PosterMaker/Theme/Sidebar'
import Preview from '@/components/PosterMaker/Theme/Preview'
import Artboards from '@/components/PosterMaker/Theme/Artboards'
import ToolBar from "@/components/PosterMaker/ToolBar/ToolBar";

export default {
  components: {
    Header,
    Sidebar,
    Preview,
    Artboards,
    ToolBar
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
  height: 100vh;

  #content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: calc(100vh - 62px);

    #preview {
      flex-grow: 1;
    }
  }
}
</style>