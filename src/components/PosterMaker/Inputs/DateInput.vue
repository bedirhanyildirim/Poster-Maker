<template>
<div id="date-input">
  <!--CustomInputDate
    :clearable="true"
    icon-name="event"
    v-model="selectedDate"
  ></CustomInputDate-->
  <CustomInputText
    :clearable="true"
    :max-char="30"
    v-model="selectedDate"
    icon-name="event"
    placeholder="dd/mm/yyyy"
  ></CustomInputText>
</div>
</template>

<script>
import CustomInputDate from "@/components/PosterMaker/CostumInput/CustomInputDate";
import CustomInputText from "@/components/PosterMaker/CostumInput/CustomInputText";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    CustomInputDate,
    CustomInputText
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