<template>
<div id="tool-bar-menu-item">
  <a class="icon-button">
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
export default {
  props: {
    iconName: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
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