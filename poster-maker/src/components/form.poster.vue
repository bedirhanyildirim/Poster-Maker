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
      date: new Date().toISOString().slice(0,10),
      time: new Date().toTimeString().slice(0,5)
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
  }
}
</style>