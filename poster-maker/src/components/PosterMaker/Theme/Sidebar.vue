<template>
<div id="sidebar">
  <div class="navbar-menu">
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
  <div class="navbar-content">
    <div class="title">
      <h4>TEXT</h4>
    </div>
    <div class="content">
      <div class="row active">
        <input type="text" v-model="title">
      </div>
      <div class="row">
        <input type="text" v-model="subject">
      </div>
      <div class="row">
        <input type="date" v-model="date">
      </div>
      <div class="row">
        <input type="time" v-model="time">
      </div>
      <div class="row">
        <input type="text" v-model="location">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      title: '',
      subject: '',
      date: '',
      time: '',
      location: ''
    }
  },
  created() {
    this.title = 'Title'
    this.subject = 'Subject'
    this.date = new Date().toISOString().slice(0,10)
    this.time = new Date().toTimeString().slice(0,5)
    this.location = 'Location'
  }
}
</script>

<style lang="scss" scoped>
#sidebar {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: #F7F7F7;

  .navbar-menu {
    width: 62px;
    display: flex;
    flex-direction: column;
    transition: all 200ms ease;
    border-right: 2px solid #E4E4E4;

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
  .navbar-content {
    width: 302px;
    display: flex;
    flex-direction: column;
    transition: all 200ms ease;
    border-right: 2px solid #E4E4E4;

    .title {
      width: 100%;
      height: 62px;
      display: flex;
      padding-left: 16px;
      align-items: center;
      border-bottom: 2px solid #E4E4E4;

      h4 {
        color: #9F9F9F;
        font-size: 16px;
        font-weight: normal;
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;

      .row {
        height: 60px;
        padding: 16px;
        display: flex;
        align-items: center;

        input {
          width: 100%;
          color: #c7c7c7;
          font-size: 14px;
          padding: 4px 8px;
          font-weight: normal;
          transition: all 200ms ease;
          background-color: transparent;
          border-bottom: 1px solid transparent;

          &:focus {
            color: #505050;
            border-bottom-color: #1ba5ec;
          }
        }
      }
    }
  }
}
</style>