<template>
<div id="tool-bar-menu">
  <ToolBarMenuItem icon-name="edit"></ToolBarMenuItem>
  <ToolBarMenuItem text="Aa"></ToolBarMenuItem>
  <ToolBarMenuItem icon-name="format_align_left"></ToolBarMenuItem>
  <ToolBarMenuItem icon-name="palette"></ToolBarMenuItem>
  <ToolBarMenuItem icon-name="wallpaper"></ToolBarMenuItem>
</div>
</template>

<script>
import ToolBarMenuItem from "@/components/PosterMaker/ToolBar/ToolBarMenuItem";
export default {
  components: {
    ToolBarMenuItem
  }
}
</script>

<style lang="scss" scoped>
#tool-bar-menu {
  width: 62px;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease;
  border-right: 2px solid #E4E4E4;
}
</style>