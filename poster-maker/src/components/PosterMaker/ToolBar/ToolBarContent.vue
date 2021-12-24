<template>
<div id="tool-bar-content">
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
</template>

<script>
import ToolBarContentTitle from "@/components/PosterMaker/ToolBar/ToolBarContentTitle";
import ToolBarContentItem from "@/components/PosterMaker/ToolBar/ToolBarContentItem";
import TitleInput from "@/components/PosterMaker/Inputs/TitleInput";
import SubjectInput from "@/components/PosterMaker/Inputs/SubjectInput";
import DateInput from "@/components/PosterMaker/Inputs/DateInput";
import TimeInput from "@/components/PosterMaker/Inputs/TimeInput";
import LocationInput from "@/components/PosterMaker/Inputs/LocationInput";

export default {
  components: {
    ToolBarContentTitle,
    ToolBarContentItem,
    TitleInput,
    SubjectInput,
    DateInput,
    TimeInput,
    LocationInput
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