<template>
<div id="date-input">
  <CustomInputDate
    :clearable="true"
    icon-name="event"
    v-model="selectedDate"
  ></CustomInputDate>
</div>
</template>

<script>
import CustomInputDate from "@/components/PosterMaker/CostumInput/CustomInputDate";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    CustomInputDate
  },
  computed: {
    ...mapState('posterMaker', ['date']),
    selectedDate: {
      get() {
        return this.date
      },
      set(value) {
        return this.setDate(value)
      }
    }
  },
  methods: {
    ...mapMutations('posterMaker', ['setDate'])
  }
}
</script>

<style lang="scss" scoped>
#date-input {
  width: 100%;
}
</style>