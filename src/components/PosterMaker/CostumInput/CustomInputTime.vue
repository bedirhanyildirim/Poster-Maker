<template>
  <div class="custom-time-input">
    <div class="icon" v-if="iconName">
    <span class="material-icons">
      {{ iconName }}
    </span>
    </div>
    <div class="hour">
      <input
        type="number"
        name="hour"
        placeholder="hh"
        v-model="hour"
        @blur="handleHourBlur"
      >
    </div>
    <span class="divider">:</span>
    <div class="minute">
      <input
        type="number"
        name="minute"
        placeholder="mm"
        v-model="minute"
        @blur="handleMinuteBlur"
      >
    </div>
    <div class="clear" v-if="clearable && (!!hour || !!minute)" @click="clearInputs">
    <span class="material-icons">
      close
    </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: undefined,
      minute: undefined,
      time: ''
    }
  },
  props: {
    clearable: {
      type: Boolean,
      required: false,
      default: false
    },
    iconName: {
      type: String,
      required: false,
      default: undefined
    },
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    hour: {
      handler(newValue, oldValue) {
        if (newValue === '') {
          this.hour = ''
        }else if (Number(newValue) > 24 || Number(newValue) < 0) {
          this.hour = Number(oldValue)
        } else {
          this.hour = Number(newValue)
        }
        this.setTime()
      }
    },
    minute: {
      handler(newValue, oldValue) {
        if (newValue === '') {
          this.minute = ''
        }else if (Number(newValue) > 60 || Number(newValue) < 0) {
          this.minute = Number(oldValue)
        } else {
          this.minute = Number(newValue)
        }
        this.setTime()
      }
    }
  },
  methods: {
    handleHourBlur() {
      if (this.hour < 0 || this.hour > 24) {
        this.hour = ''
      }
      this.setTime()
    },
    handleMinuteBlur() {
      if (this.minute < 0 || this.minute > 60) {
        this.minute = ''
      }
      this.setTime()
    },
    clearInputs() {
      this.hour = ''
      this.minute = ''
    },
    setTime() {
      if (this.hour !== '' && this.minute !== '') {
        let newHour = this.hour < 10 ? '0' + this.hour : this.hour
        let newMinute = this.minute < 10 ? '0' + this.minute : this.minute
        this.time = newHour + ':' + newMinute
      } else {
        this.time = ''
      }
      this.$emit('input', this.time)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-time-input {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;

  .icon, .clear {
    margin: 0;
    padding: 0;
    display: flex;
    color: #666666;
    align-items: center;
    justify-content: center;

    .material-icons {
      font-size: 16px;
      transition: all 200ms ease;
    }
  }

  .icon {
    margin: 0 4px 2px 4px;
  }

  .clear {
    color: #666666;
    cursor: pointer;
    margin: 0 4px 2px auto;

    &:hover {
      color: #000000;
    }
  }

  .divider {
    color: #c7c7c7;
    padding: 0 4px;
    font-size: 16px;
    font-weight: 500;
  }

  .hour, .minute {
    width: auto;
    display: flex;
  }

  input[type=number] {
    width: 36px;
    color: #666666;
    font-size: 16px;
    font-weight: normal;
    padding: 4px;
    text-align: center;
    transition: all 200ms ease;
    background-color: transparent;
    border-bottom: 1px solid transparent;

    &::placeholder {
      color: #c7c7c7;
    }

    &:hover {
      border-bottom-color: #1ba5ec;
    }

    &:focus {
      color: #000000;
      border-bottom-color: #1ba5ec;
    }
  }
}
</style>