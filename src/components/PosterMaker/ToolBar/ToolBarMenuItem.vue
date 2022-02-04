<template>
<div id="tool-bar-menu-item" @click="select">
  <a class="icon-button" :class="isSelected">
    <span v-if="iconName" class="material-icons">
      {{ iconName }}
    </span>
    <span v-if="text">
      {{ text }}
    </span>
  </a>
</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    iconName: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('posterMaker', ['selectedToolBar']),
    isSelected() {
      return this.selectedToolBar === this.name ? 'active' : ''
    }
  },
  methods: {
    ...mapMutations('posterMaker', ['setToolBar']),
    select() {
      this.setToolBar(this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
#tool-bar-menu-item {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  .icon-button {
    padding: 8px;
    color: #666666;
    font-weight: 600;
    transition: all 200ms ease;

    &:hover {
      color: #333333;
    }

    &.active {
      color: #1ba5ec;
    }

    .material-icons {
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
    }
  }
}
</style>