<template>
<div id="time-input">
  <CustomInputTime
    :clearable="true"
    icon-name="schedule"
    v-model="selectedTime"
  ></CustomInputTime>
</div>
</template>

<script>
import CustomInputTime from "@/components/PosterMaker/CostumInput/CustomInputTime";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    CustomInputTime
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