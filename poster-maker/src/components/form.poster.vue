<template>
<div id="form-poster">
  <div class="row">
    <label for="title" class="label">Title</label>
    <input type="text" id="title" v-model="title" class="input-text">
  </div>
  <div class="row">
    <label for="subject" class="label">Subject</label>
    <input type="text" id="subject" v-model="subject" class="input-text">
  </div>
  <div class="row">
    <label for="location" class="label">Date & Time</label>
    <div class="double-input">
      <input type="date" id="date" v-model="date" class="input-date">
      <input type="time" id="time" v-model="time" class="input-time">
    </div>
  </div>
  <div class="row">
    <label for="location" class="label">Location</label>
    <input type="text" id="location" v-model="location" class="input-text">
  </div>
  <div class="row">
    <span class="platforms">Instagram Story, Instagram Post, Youtuber Cover</span>
    <a class="download-button" @click="download">Download</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'form.poster',
  data: function () {
    return {
      title: '',
      subject: '',
      location: '',
      date: '',
      time: ''
    }
  },
  created() {
    this.title = 'Title'
    this.subject = 'Subject'
    this.date = new Date().toISOString().slice(0,10)
    this.time = new Date().toTimeString().slice(0,5)
    this.location = 'Zoom'
  },
  watch: {
    title: function (val) {
      this.$emit('title', val)
    },
    subject: function (val) {
      this.$emit('subject', val)
    },
    location: function (val) {
      this.$emit('location', val)
    },
    date: function (val) {
      this.$emit('date', val)
    },
    time: function (val) {
      this.$emit('time', val)
    }
  },
  methods: {
    download: function () {
      alert('Coming Soon!')
    }
  }
}
</script>

<style lang="scss" scoped>
#form-poster {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .row {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    align-items: baseline;
    flex-direction: column;
    justify-content: center;

    .label {
      color: #303030;
      display: block;
      font-size: 18px;
      font-weight: 500;
      margin: 16px 0 8px;
      font-family: '.AppleSystemUIFont';
    }
    .double-input {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
    }
    .input-text {
      width: 100%;
      height: 40px;
      outline: none;
      color: #000000;
      font-size: 14px;
      appearance: none;
      font-weight: 400;
      line-height: 24px;
      padding: 10px 16px;
      border-radius: 8px;
      display: inline-block;
      box-sizing: border-box;
      background-color: #ffffff;
      transition: all 200ms ease;
      border: 1px solid transparent;
      &:hover {
        background-color: #ffffff;
        border-color: rgba(0,0,0,0.1);
        box-shadow: 0 0 0 4px rgba(48, 48, 48, 0.1);
      }
      &:focus {
        background-color: #ffffff;
        border-color: rgba(48,48,48,0.4);
        box-shadow: 0 0 0 4px rgba(48, 48, 48, 0.1);
      }
    }
    .input-date {
      width: 100%;
      height: 40px;
      outline: none;
      color: #000000;
      font-size: 14px;
      appearance: none;
      font-weight: 400;
      line-height: 24px;
      padding: 10px 16px;
      border-radius: 8px;
      margin-right: 16px;
      display: inline-block;
      box-sizing: border-box;
      background-color: #ffffff;
      transition: all 200ms ease;
      border: 1px solid transparent;
      font-family: '.AppleSystemUIFont';
      &:hover {
        background-color: #ffffff;
        border-color: rgba(0,0,0,0.1);
        box-shadow: 0 0 0 4px rgba(48, 48, 48, 0.1);
      }
      &:focus {
        background-color: #ffffff;
        border-color: rgba(48,48,48,0.4);
        box-shadow: 0 0 0 4px rgba(48, 48, 48, 0.1);
      }
    }
    .input-time {
      width: 100%;
      height: 40px;
      outline: none;
      color: #000000;
      font-size: 14px;
      appearance: none;
      font-weight: 400;
      line-height: 24px;
      padding: 10px 16px;
      border-radius: 8px;
      display: inline-block;
      box-sizing: border-box;
      background-color: #ffffff;
      transition: all 200ms ease;
      border: 1px solid transparent;
      font-family: '.AppleSystemUIFont';
      &:hover {
        background-color: #ffffff;
        border-color: rgba(0,0,0,0.1);
        box-shadow: 0 0 0 4px rgba(48, 48, 48, 0.1);
      }
      &:focus {
        background-color: #ffffff;
        border-color: rgba(48,48,48,0.4);
        box-shadow: 0 0 0 4px rgba(48, 48, 48, 0.1);
      }
    }
    .platforms {
      color: #303030;
      cursor: pointer;
      font-size: 14px;
      font-weight: 300;
      white-space: nowrap;
      padding-bottom: 4px;
      margin: 16px 0 0 8px;
      border-bottom: 1px solid rgba(48, 48, 48, 0.5);

      &:after {
        content: ' ..';
      }
    }
    .download-button {
      width: 100%;
      outline: none;
      color: #ffffff;
      cursor: pointer;
      font-size: 14px;
      margin-top: 16px;
      appearance: none;
      font-weight: 500;
      line-height: 24px;
      padding: 8px 16px;
      text-align: center;
      border-radius: 8px;
      display: inline-block;
      box-sizing: border-box;
      background-color: #303030;
      transition: all 200ms ease;
      font-family: '.AppleSystemUIFont';

      &:hover {
        background-color: #000000;
      }
    }
  }
}
</style>