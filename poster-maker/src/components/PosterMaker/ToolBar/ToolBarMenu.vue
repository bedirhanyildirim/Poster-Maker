<template>
<div id="tool-bar-menu">
  <ToolBarMenuItem
    icon-name="edit"
    :name="this.toolBarMenu.TEXT"
  ></ToolBarMenuItem>
  <ToolBarMenuItem
    text="Aa"
    :name="this.toolBarMenu.FONT"
  ></ToolBarMenuItem>
  <ToolBarMenuItem
    icon-name="format_align_left"
    :name="this.toolBarMenu.ALIGN"
  ></ToolBarMenuItem>
  <ToolBarMenuItem
    icon-name="palette"
    :name="this.toolBarMenu.COLOR"
  ></ToolBarMenuItem>
  <ToolBarMenuItem
    icon-name="wallpaper"
    :name="this.toolBarMenu.BACKGROUND"
  ></ToolBarMenuItem>
</div>
</template>

<script>
import ToolBarMenuItem from "@/components/PosterMaker/ToolBar/ToolBarMenuItem";
import { mapState } from "vuex";
export default {
  components: {
    ToolBarMenuItem
  },
  computed: {
    ...mapState('posterMaker', [
      "toolBarMenu"
    ])
  }
}
</script>

<style lang="scss" scoped>
#tool-bar-menu {
  width: 62px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #E4E4E4;
}
</style>