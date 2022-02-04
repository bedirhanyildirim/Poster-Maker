<template>
<div id="tool-bar-content-title">
  <h4>{{ title }}</h4>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#tool-bar-content-title {
  width: 100%;
  height: 62px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  border-bottom: 2px solid #E4E4E4;

  h4 {
    color: #9F9F9F;
    font-size: 16px;
    font-weight: normal;
    text-transform: uppercase;
  }
}
</style>