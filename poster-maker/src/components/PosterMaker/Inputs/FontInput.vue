<template>
<div id="font-input">
  <div
    class="font"
    v-for="font in fonts"
    :key="font.family"
    :class="{'selected': isSelected(font)}"
    :style="{fontFamily: font.family}"
    @click="select(font)"
  ><span>{{ font.family }}</span></div>
  <div class="footer"><a href="https://developers.google.com/fonts/docs/developer_api" target="blank">Google Fonts</a></div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  computed: {
    ...mapState('posterMaker', ['fonts', 'selectedFont'])
  },
  methods: {
    ...mapMutations('posterMaker', ['setFont']),
    isSelected(font) {
      return this.selectedFont.family === font.family
    },
    select(font) {
      this.setFont(font)
    }
  }
}
</script>

<style lang="scss" scoped>
#font-input {
  width: 100%;
  height: calc(100vh - 156px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .font {
    width: 100%;
    padding: 16px;
    color: #505050;
    font-size: .9rem;
    border-radius: 4px;
    font-weight: normal;
    margin-bottom: 16px;
    background-color: #ffffff;
    border: 1px solid #E4E4E4;
    transition: all 200ms ease;

    &:hover {
      cursor: pointer;
      border-color: #1ba5ec;
    }

    &.selected {
      color: #000000;
      border-color: #1ba5ec;
    }

    &:last-child{
      margin-bottom: 0;
    }
  }

  .footer {
    width: 100%;

    a {
      color: #666666;
      font-size: .8rem;
    }
  }
}

</style>