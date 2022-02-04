<template>
<div id="footer">
  <h5>&copy <a href="http://bedirhanyildirim.com" target="_blank">bedcodes</a> | Fabriano 2021</h5>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#footer {
  h5 {
    display: flex;
    font-size: 14px;
    font-weight: normal;
    align-items: center;
  }
  a {
    color: #303030;
    font-weight: bold;
    margin: 0 2px;
  }
}
</style>