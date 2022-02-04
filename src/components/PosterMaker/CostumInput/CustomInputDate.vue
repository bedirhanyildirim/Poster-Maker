<template>
<div class="custom-date-input">
  <div class="icon" v-if="iconName">
    <span class="material-icons">
      {{ iconName }}
    </span>
  </div>
  <div class="day">
    <input
      type="number"
      name="day"
      placeholder="dd"
      v-model="day"
      @blur="handleDayBlur"
    >
  </div>
  <span class="divider">/</span>
  <div class="month">
    <input
      type="number"
      name="month"
      placeholder="mm"
      v-model="month"
      @blur="handleMonthBlur"
    >
  </div>
  <span class="divider">/</span>
  <div class="year">
    <input
      type="number"
      name="year"
      placeholder="yyyy"
      v-model="year"
      @blur="handleYearBlur"
    >
  </div>
  <div class="clear" v-if="clearable && (!!day || !!month || !!year)" @click="clearInputs">
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
      day: undefined,
      month: undefined,
      year: undefined,
      date: ''
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
    day: {
      handler(newValue, oldValue) {
        if (newValue === '') {
          this.day = ''
        }else if (Number(newValue) > 31 || Number(newValue) < 1) {
          this.day = Number(oldValue)
        } else {
          this.day = Number(newValue)
        }
        this.setDate()
      }
    },
    month: {
      handler(newValue, oldValue) {
        if (newValue === '') {
          this.month = ''
        }else if (Number(newValue) > 12 || Number(newValue) < 1) {
          this.month = Number(oldValue)
        } else {
          this.month = Number(newValue)
        }
        this.setDate()
      }
    },
    year: {
      handler(newValue, oldValue) {
        if (newValue === '') {
          this.year = ''
        } else {
          if (this.year.length >= 4) {
            if (Number(newValue) > 2100 || Number(newValue) < 2000) {
              this.year = Number(oldValue)
            } else {
              this.year = Number(newValue)
              this.setDate()
            }
          } else {
            this.year = Number(newValue)
          }
        }
      }
    },
  },
  methods: {
    handleDayBlur() {
      if (this.day < 1 || this.day > 31) {
        this.day = ''
      }
      this.setDate()
    },
    handleMonthBlur() {
      if (this.month < 1 || this.month > 12) {
        this.month = ''
      }
      this.setDate()
    },
    handleYearBlur() {
      if (this.year < 2000 || this.year > 2100) {
        this.year = ''
      }
      this.setDate()
    },
    clearInputs() {
      this.day = ''
      this.month = ''
      this.year = ''
    },
    setDate() {
      if (!!this.day && !!this.month && !!this.year) {
        let newDay = this.day < 10 ? '0' + this.day : this.day
        let newMonth = this.month < 10 ? '0' + this.month : this.month

        this.date = newDay + '/' + newMonth + '/' + this.year
      } else {
        this.date = ''
      }
      this.$emit('input', this.date)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-date-input {
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

  .day, .month, .year {
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

  .year {
    input[type=number] {
      width: 56px;
    }
  }
}
</style>