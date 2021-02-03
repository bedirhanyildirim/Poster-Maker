<template>
<div id="header">
  <div class="header">
    <div class="logo">
      <router-link to="/">P</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'header.theme'
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  display: flex;
  justify-content: center;

  .header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .logo {
      display: flex;
      padding: 1px 2px;
      border-radius: 8px;
      align-items: center;
      margin: 24px 0 0 48px;
      justify-content: center;
      border: 4px solid #000000;
      background-color: #ffffff;
      transition: border-color 200ms ease;

      a {
        color: #000000;
        font-size: 32px;
        font-weight: 700;
        line-height: 22px;
        padding: 4px 2px 0 2px;
        transition: color 200ms ease;
        font-family: '.AppleSystemUIFont';
      }

      &:hover {
        cursor: pointer;
        border-color: #303030;

        a {
          color: #303030;
        }
      }
    }
  }
}
</style>