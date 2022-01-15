<template>
<div id="time-input">
  <!--CustomInputTime
    :clearable="true"
    icon-name="schedule"
    v-model="selectedTime"
  ></CustomInputTime-->
  <CustomInputText
    :clearable="true"
    :max-char="5"
    v-model="selectedTime"
    icon-name="schedule"
    placeholder="dd/mm/yyyy"
  ></CustomInputText>
</div>
</template>

<script>
import CustomInputTime from '@/components/PosterMaker/CostumInput/CustomInputTime'
import CustomInputText from '@/components/PosterMaker/CostumInput/CustomInputText'
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    CustomInputTime,
    CustomInputText
  },
  computed: {
    ...mapState('posterMaker', ['time']),
    selectedTime: {
      get() {
        return this.time
      },
      set(value) {
        return this.setTime(value)
      }
    }
  },
  methods: {
    ...mapMutations('posterMaker', ['setTime'])
  }
}
</script>

<style lang="scss" scoped>
#time-input {
  width: 100%;
}
</style>