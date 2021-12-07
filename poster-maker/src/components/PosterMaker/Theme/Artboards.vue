<template>
  <div id="artboards">
    <div class="title">
      <h2>Artboards</h2>
    </div>
    <div class="artboard">
      Square (1:1)
    </div>
    <div class="artboard">
      Instagram - Story (9:16)
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#artboards {
  margin: 0;
  padding: 0;
  width: 302px;
  display: flex;
  flex-direction: column;
  background-color: #F7F7F7;
  border-left: 2px solid #E4E4E4;

  .title h2{
    font-size: 1rem;
    color: #9F9F9F;
    margin: 16px;
    font-weight: normal;
  }

  .artboard {
    margin: 8px 16px;
    display: flex;
    color: #505050;
    font-size: .8rem;
    text-align: left;
    border-radius: 4px;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #E4E4E4;
    padding: 16px;
  }
}
</style>