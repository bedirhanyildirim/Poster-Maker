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
      <FontInput></FontInput>
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
      <ColorInput></ColorInput>
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
import FontInput from "@/components/PosterMaker/Inputs/FontInput";
import ColorInput from "@/components/PosterMaker/Inputs/ColorInput";
import {mapState, mapActions, mapMutations} from "vuex";

export default {
  components: {
    ToolBarContentTitle,
    ToolBarContentItem,
    TitleInput,
    SubjectInput,
    DateInput,
    TimeInput,
    LocationInput,
    AlignInput,
    FontInput,
    ColorInput
  },
  data() {
    return {
      colors: [
        {
          name: 'White',
          type: 'solid',
          baseColor: '#ffffff',
          fontColor: '#000000'
        },
        {
          name: 'Gray',
          type: 'solid',
          baseColor: '#D9D9D9',
          fontColor: '#000000'
        },
        {
          name: 'Black',
          type: 'solid',
          baseColor: '#232323',
          fontColor: '#ffffff'
        },
        {
          name: 'Instagram 1',
          type: 'linearGradient',
          baseColor: 'linear-gradient(135deg, #B72ACD, #F98E36)',
          fontColor: '#ffffff'
        },
        {
          name: 'Instagram 2',
          type: 'linearGradient',
          baseColor: 'linear-gradient(135deg, #B52CCA, #47ADFF)',
          fontColor: '#ffffff'
        },
        {
          name: 'Instagram 3',
          type: 'linearGradient',
          baseColor: 'linear-gradient(135deg, #52B023, #28C4F4)',
          fontColor: '#ffffff'
        },
        {
          name: 'Instagram 4',
          type: 'linearGradient',
          baseColor: 'linear-gradient(135deg, #D9434F, #F9CB65)',
          fontColor: '#ffffff'
        },
        {
          name: 'Instagram 5',
          type: 'linearGradient',
          baseColor: 'linear-gradient(135deg, #B72BCD, #FF6875)',
          fontColor: '#ffffff'
        }
      ]
    }
  },
  computed: {
    ...mapState('posterMaker', [
      'toolBarMenu',
      'selectedToolBar'
    ]),
    getToday() {
      let today = new Date()
      let dd = String(today.getDate()).padStart(2, '0')
      let mm = String(today.getMonth() + 1).padStart(2, '0')
      let yyyy = today.getFullYear()
      return dd + '.' + mm + '.' + yyyy
    },
    getTime() {
      let today = new Date()
      let hh = String(today.getHours())
      let mm = String(today.getMinutes())
      return (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm)
    }
  },
  async mounted() {
    this.setTitle('Poster Maker')
    this.setSubject('The cool way of poster design')
    this.setDate(this.getToday)
    this.setTime(this.getTime)
    this.setLocation('bedirhan.design')
    await this.getGoogleFonts()
    this.setColors(this.colors)
    this.setColor(this.colors[0])
  },
  methods: {
    ...mapMutations('posterMaker', [
      'setColor',
      'setColors',
      'setTitle',
      'setSubject',
      'setDate',
      'setTime',
      'setLocation'
    ]),
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