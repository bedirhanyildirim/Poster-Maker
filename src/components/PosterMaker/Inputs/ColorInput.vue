<template>
<div id="color-input">
  <div
    class="color"
    v-for="color in colors"
    :key="color.name"
    :class="{'selected': isSelected(color)}"
    :style="{background: color.baseColor, color: color.fontColor}"
    @click="select(color)"
  >{{ title ? title : 'Poster Maker' }}</div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  computed: {
    ...mapState('posterMaker', ['colors', 'selectedColor', 'title'])
  },
  methods: {
    ...mapMutations('posterMaker', ['setColors', 'setColor']),
    isSelected(color){
      return this.selectedColor === color
    },
    select(color) {
      this.setColor(color)
    }
  }
}
</script>

<style lang="scss" scoped>
#color-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .color {
    width: 100%;
    padding: 16px;
    margin-bottom: 16px;
    color: #505050;
    font-size: .9rem;
    border-radius: 4px;
    font-weight: normal;
    transition: all 200ms ease;
    background-color: #ffffff;
    border: 1px solid #E4E4E4;

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
}
</style>