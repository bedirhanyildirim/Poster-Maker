<template>
<div id="home">
  <div id="content">
    <header-theme></header-theme>
    <div id="form">
      <poster-form @title="updateTitle" @subject="updateSubject" @date="updateDate"
      @time="updateTime" @location="updateLocation"></poster-form>
    </div>
    <footer-theme></footer-theme>
  </div>
  <div id="preview">
    <poster-preview :title="title" :subject="subject" :date="getDateFormated" :time="time" :location="location">
    </poster-preview>
  </div>
</div>
</template>

<script>
import HeaderTheme from '../components/PosterMaker/Theme/Header'
import FooterTheme from '../components/PosterMaker/Theme/Footer'
import PosterForm from '../components/form.poster'
import PosterPreview from '../components/preview.poster'
export default {
  components: { HeaderTheme, FooterTheme, PosterForm, PosterPreview },
  data: function () {
    return {
      title: '',
      subject: '',
      date: '',
      time: '',
      location: ''
    }
  },
  methods: {
    updateTitle: function (val) {
      this.title = val
    },
    updateSubject: function (val) {
      this.subject = val
    },
    updateDate: function (val) {
      this.date = val
    },
    updateTime: function (val) {
      this.time = val
    },
    updateLocation: function (val) {
      this.location = val
    }
  },
  computed: {
    getDateFormated: function () {
      if (this.date.length > 0) {
        let d = this.date.split('-')[2]
        let m = this.date.split('-')[1]
        let y = this.date.split('-')[0]
        return d+'.'+m+'.'+y
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  #content {
    width: 800px;
    background-color: #efefef;

    #form {
      padding: 48px;
      height: calc(100vh - 88px);
    }
  }
  #preview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>