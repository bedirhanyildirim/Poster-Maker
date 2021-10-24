<template>
<div id="sidebar">
  <div class="navbar">
    <div class="item">
      <a class="icon-button active">
        <span class="material-icons">
          edit
        </span>
      </a>
    </div>
    <div class="item">
      <a class="icon-button">
        <span>
          Aa
        </span>
      </a>
    </div>
    <div class="item">
      <a class="icon-button">
        <span class="material-icons">
          palette
        </span>
      </a>
    </div>
    <div class="item">
      <a class="icon-button">
        <span class="material-icons">
          wallpaper
        </span>
      </a>
    </div>
    <div class="item">
      <a class="icon-button">
        <span class="material-icons">
          format_align_left
        </span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#sidebar {
  margin: 0;
  padding: 0;
  width: 62px;
  display: flex;
  justify-content: center;
  background-color: #F7F7F7;
  border-right: 2px solid #E4E4E4;

  .navbar {
    display: flex;
    flex-direction: column;
    transition: all 200ms ease;

    .item {
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
  }
}
</style>