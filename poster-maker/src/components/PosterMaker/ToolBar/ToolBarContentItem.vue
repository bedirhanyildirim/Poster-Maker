<template>
<div id="tool-bar-content-item">
  <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#tool-bar-content-item {
  width: 100%;
  height: 60px;
  padding: 16px;
  display: flex;
  align-items: center;
}
</style>