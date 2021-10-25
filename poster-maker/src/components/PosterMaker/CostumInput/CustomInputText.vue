<template>
<div class="custom-text-input">
  <div class="icon" v-if="iconName">
    <span class="material-icons" style="font-size: 16px;">
      {{ iconName }}
    </span>
  </div>
  <input
    type="text"
    :name="name"
    v-model="value"
    :placeholder="placeholder"
    @input="onInput"
    @change="onChange"/>
  <div class="clear" v-if="clearable && (value !== '')">
    <span class="material-icons" style="font-size: 16px" @click="clearInput">
      close
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false
    },
    iconName: {
      type: String,
      required: false,
      default: undefined
    }
  },
  computed: {
    name() {
      return this.placeholder.toLowerCase()
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    onChange(event) {
      this.$emit('change', event.target.value)
    },
    clearInput() {
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-text-input {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;

  &:hover {
    input[type=text] {
      border-bottom-color: #1ba5ec;
    }
  }

  .icon, .clear {
    margin: 0;
    padding: 0;
    display: flex;
    color: #666666;
    position: absolute;
    align-items: center;
    justify-content: center;

    .material-icons {
      transition: all 200ms ease;
    }
  }

  .icon {
    top: 0;
    left: 4px;
    bottom: 2px;
  }

  .clear {
    top: 0;
    right: 0;
    bottom: 2px;
    padding: 4px;
    color: #666666;
    cursor: pointer;

    &:hover {
      color: #000000;
    }
  }

  input[type=text] {
    width: 100%;
    color: #666666;
    font-size: 16px;
    font-weight: normal;
    padding: 4px 24px 4px 28px;
    transition: all 200ms ease;
    background-color: transparent;
    border-bottom: 1px solid transparent;

    &::placeholder {
      color: #c7c7c7;
    }

    &:focus {
      color: #000000;
      border-bottom-color: #1ba5ec;
    }
  }
}
</style>