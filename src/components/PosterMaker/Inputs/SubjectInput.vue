<template>
<div id="subject-input">
  <CustomInputText
      :clearable="true"
      icon-name="text_fields"
      placeholder="subject"
      :max-char="180"
      v-model="selectedSubject">
  </CustomInputText>
</div>
</template>

<script>
import CustomInputText from "@/components/PosterMaker/CostumInput/CustomInputText";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    CustomInputText
  },
  computed: {
    ...mapState('posterMaker', ['subject']),
    selectedSubject: {
      get() {
        return this.subject
      },
      set(value) {
        return this.setSubject(value)
      }
    }
  },
  methods: {
    ...mapMutations('posterMaker', ['setSubject'])
  }
}
</script>

<style lang="scss" scoped>
#subject-input {
  width: 100%;
}
</style>