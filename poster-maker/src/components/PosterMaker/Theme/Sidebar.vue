<template>
<div id="sidebar">
  <div class="menu">
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
  <div class="content">
    <div class="title">
      <h4>TEXT</h4>
    </div>
    <div class="inputs">
      <div class="row">
        <CustomInputText
          :clearable="true"
          icon-name="title"
          placeholder="title"
          :max-char="50"
          v-model="selectedTitle">
        </CustomInputText>
      </div>
      <div class="row">
        <CustomInputText
          :clearable="true"
          icon-name="text_fields"
          placeholder="subject"
          :max-char="180"
          v-model="selectedSubject">
        </CustomInputText>
      </div>
      <div class="row">
        <CustomInputDate
          :clearable="true"
          icon-name="event"
          v-model="selectedDate"
        ></CustomInputDate>
      </div>
      <div class="row">
        <CustomInputTime
          :clearable="true"
          icon-name="schedule"
          v-model="selectedTime"
        ></CustomInputTime>
      </div>
      <div class="row">
        <CustomInputText
          :clearable="true"
          icon-name="place"
          placeholder="location"
          v-model="selectedLocation">
        </CustomInputText>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CustomInputText from '@/components/PosterMaker/CostumInput/CustomInputText'
import CustomInputDate from '@/components/PosterMaker/CostumInput/CustomInputDate'
import CustomInputTime from '@/components/PosterMaker/CostumInput/CustomInputTime'

export default {
  components: {
    CustomInputText,
    CustomInputDate,
    CustomInputTime
  },
  created() {
    this.selectedTitle = 'POSTER MAKER'
    this.selectedSubject = 'We design posters in one click'
    this.selectedDate = '07/12/2021'
    this.selectedTime = '15:30'
    this.selectedLocation = 'Google Meet'
  },
  computed: {
    ...mapState('posterMaker', [
        'title',
        'subject',
        'date',
        'time',
        'location'
    ]),
    selectedTitle: {
      get() {
        return this.title
      },
      set(value) {
        return this.setTitle(value)
      }
    },
    selectedSubject: {
      get() {
        return this.subject
      },
      set(value) {
        return this.setSubject(value)
      }
    },
    selectedDate: {
      get() {
        return this.date
      },
      set(value) {
        return this.setDate(value)
      }
    },
    selectedTime: {
      get() {
        return this.time
      },
      set(value) {
        return this.setTime(value)
      }
    },
    selectedLocation: {
      get() {
        return this.location
      },
      set(value) {
        return this.setLocation(value)
      }
    }
  },
  methods: {
    ...mapMutations('posterMaker', [
        'setTitle',
        'setSubject',
        'setDate',
        'setTime',
        'setLocation',
        'selectColor',
        'selectLayout',
        'selectFont'
    ])
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

  .menu {
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
  .content {
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
    .inputs {
      width: 100%;
      display: flex;
      flex-direction: column;

      .row {
        width: 100%;
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