<template>
  <div>
    <Header></Header>
    <slot></slot>
  </div>
</template>

<script>
import Header from "@/components/PosterMaker/Theme/Header"

export default {
  components: {
    Header
  }
}
</script>

<style>
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
</style>