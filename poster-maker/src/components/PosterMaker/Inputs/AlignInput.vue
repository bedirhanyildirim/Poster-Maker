<template>
<div id="align-input"><div
    class="align"
    v-for="al in this.layouts"
    :key="al"
    :class="isSelected(al) ? 'selected' : ''"
    @click="select(al)"
  ><span>{{ al }}</span>
  </div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  computed: {
    ...mapState('posterMaker', [
      'layouts',
      'selectedLayout'
    ])
  },
  methods: {
    ...mapMutations('posterMaker', ['setLayout']),
    isSelected(name){
      return this.selectedLayout === name
    },
    select(name) {
      this.setLayout(name)
    }
  }
}
</script>

<style lang="scss" scoped>
#align-input {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .align {
    padding: 4px;
    color: #666666;
    font-size: 16px;
    font-weight: normal;
    transition: all 200ms ease;
    background-color: transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      color: #000000;
      cursor: pointer;
      border-bottom-color: #1ba5ec;
    }

    &.selected {
      color: #000000;
      border-bottom-color: #1ba5ec;
    }

    span {
      text-transform: lowercase;
    }
  }
}
</style>