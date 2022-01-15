<template>
<div id="artboard-input">
  <div
    class="artboard"
    v-for="artboard in artboards"
    :key="artboard.name"
    :class="{'selected': isSelected(artboard)}"
    @click="select(artboard)"
  >{{ artboard.name }} ({{ artboard.ratio }})</div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  computed: {
    ...mapState('posterMaker', ['artboards', 'selectedArtboard'])
  },
  methods: {
    ...mapMutations('posterMaker', ['setArtboard']),
    isSelected(artboard) {
      return this.selectedArtboard === artboard
    },
    select(artboard) {
      this.setArtboard(artboard)
    }
  }
}
</script>

<style lang="scss" scoped>
#artboard-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .artboard {
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