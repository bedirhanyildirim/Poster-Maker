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
    <ToolBarContentItem>
      <h4>Font 1</h4>
    </ToolBarContentItem>
    <ToolBarContentItem>
      <h4>Font 2</h4>
    </ToolBarContentItem>
  </div>
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.ALIGN)">
    <ToolBarContentTitle title="Layout"></ToolBarContentTitle>
    <ToolBarContentItem>
      <AlignInput></AlignInput>
    </ToolBarContentItem>
  </div>
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.COLOR)">
    <ToolBarContentTitle title="Colors"></ToolBarContentTitle>
    <ToolBarContentItem>
      <h4>Color 1</h4>
    </ToolBarContentItem>
  </div>
  <div class="tool-bar-content-group" v-if="isSelected(this.toolBarMenu.BACKGROUND)">
    <ToolBarContentTitle title="Background"></ToolBarContentTitle>
    <ToolBarContentItem>
      <h4>Background 1</h4>
    </ToolBarContentItem>
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
import AlignInput from "@/components/PosterMaker/Inputs/AlignInput";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ToolBarContentTitle,
    ToolBarContentItem,
    TitleInput,
    SubjectInput,
    DateInput,
    TimeInput,
    LocationInput,
    AlignInput
  },
  computed: {
    ...mapState('posterMaker', [
      'toolBarMenu',
      'selectedToolBar'
    ])
  },
  async mounted() {
    await this.getGoogleFonts();
  },
  methods: {
    ...mapActions('posterMaker', ['getGoogleFonts']),
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