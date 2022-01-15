<template>
<div id="align-input">
  <div
    class="align"
    v-for="al in this.layouts"
    :key="al"
    :class="[{'selected': isSelected(al)}, al.toLowerCase()]"
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .align {
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

    span {
      text-transform: lowercase;
    }

    &:last-child{
      margin-bottom: 0;
    }
  }
}
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
</style>