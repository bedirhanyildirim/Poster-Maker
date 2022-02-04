<template>
<div id="tool-bar">
  <ToolBarMenu></ToolBarMenu>
  <ToolBarContent></ToolBarContent>
</div>
</template>

<script>
import ToolBarMenu from "@/components/PosterMaker/ToolBar/ToolBarMenu";
import ToolBarContent from "@/components/PosterMaker/ToolBar/ToolBarContent";

export default {
  components: {
    ToolBarMenu,
    ToolBarContent
  }
}
</script>

<style lang="scss" scoped>
#tool-bar {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: #F7F7F7;
}
</style>