<template>
<div id="maxOSWindow">
  <div class="header dark">
    <div class="dot red"></div>
    <div class="dot amber"></div>
    <div class="dot green"></div>
  </div>
  <div class="mid dark">
    <slot></slot>
  </div>
  <div class="footer dark"></div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#maxOSWindow {
  width: 100%;
  display: block;
  min-width: 280px;
  overflow: hidden;
  border-radius: 7px;
  backdrop-filter: blur(10px);
  box-shadow: rgba(0,0,0,.4) 0 3px 40px;

  .header {
    width: 100%;
    padding: 10px;
    background: rgba(180, 180, 180, .8);

    &.dark {
      background: rgba(39, 49, 56, .8);

      .dot {
        //background: #4a5c66;
      }
    }

    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #f9f9f9;
      border-radius: 50%;
      margin: 0 4px 0 0;

      &.red {
        background: #FF6057;
        border: 1px solid #E14640;
      }

      &.amber {
        background: #FFBD2E;
        border: 1px solid #DFA123;
      }

      &.green {
        background: #27C93F;
        border: 1px solid #1DAD2B;
      }
    }
  }

  .mid {
    color: black;
    padding: 20px 20px 10px 20px;
    background: rgb(180, 180, 180);

    &.dark {
      color: white;
      background: rgb(39, 49, 56);
    }
  }

  .footer {
    padding: 10px;
    display: block;
    background: rgb(180, 180, 180);

    &.dark {
      background: rgb(39, 49, 56);
    }
  }
}
</style>