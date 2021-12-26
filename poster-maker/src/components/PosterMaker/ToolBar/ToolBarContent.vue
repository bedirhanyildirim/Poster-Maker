<template>
<div id="tool-bar-content">
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.TEXT)">
    <ToolBarContentTitle title="Text"></ToolBarContentTitle>
    <ToolBarContentItem>
      <TitleInput></TitleInput>
    </ToolBarContentItem>
    <ToolBarContentItem>
      <SubjectInput></SubjectInput>
    </ToolBarContentItem>
    <ToolBarContentItem>
      <DateInput></DateInput>
    </ToolBarContentItem>
    <ToolBarContentItem>
      <TimeInput></TimeInput>
    </ToolBarContentItem>
    <ToolBarContentItem>
      <LocationInput></LocationInput>
    </ToolBarContentItem>
  </div>
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.FONT)">
    <ToolBarContentTitle title="Fonts"></ToolBarContentTitle>
  </div>
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.ALIGN)">
    <ToolBarContentTitle title="Alignment"></ToolBarContentTitle>
  </div>
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.COLOR)">
    <ToolBarContentTitle title="Colors"></ToolBarContentTitle>
  </div>
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.BACKGROUND)">
    <ToolBarContentTitle title="Background"></ToolBarContentTitle>
  </div>
</div>
</template>

<script>
import ToolBarContentTitle from "@/components/PosterMaker/ToolBar/ToolBarContentTitle";
import ToolBarContentItem from "@/components/PosterMaker/ToolBar/ToolBarContentItem";
import TitleInput from "@/components/PosterMaker/Inputs/TitleInput";
import SubjectInput from "@/components/PosterMaker/Inputs/SubjectInput";
import DateInput from "@/components/PosterMaker/Inputs/DateInput";
import TimeInput from "@/components/PosterMaker/Inputs/TimeInput";
import LocationInput from "@/components/PosterMaker/Inputs/LocationInput";
import { mapState } from "vuex";

export default {
  components: {
    ToolBarContentTitle,
    ToolBarContentItem,
    TitleInput,
    SubjectInput,
    DateInput,
    TimeInput,
    LocationInput
  },
  computed: {
    ...mapState('posterMaker', [
      'toolBarMenu',
      'selectedToolBar'
    ])
  },
  methods: {
    isSelected(name) {
      return this.selectedToolBar === name
    }
  }
}
</script>

<style lang="scss" scoped>
#tool-bar-content {
  width: 302px;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease;
  border-right: 2px solid #E4E4E4;
}
</style>