<template>
<div id="title-input">
  <CustomInputText
    :clearable="true"
    icon-name="title"
    placeholder="title"
    :max-char="50"
    v-model="selectedTitle">
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
    ...mapState('posterMaker', ['title']),
    selectedTitle: {
      get() {
        return this.title
      },
      set(value) {
        return this.setTitle(value)
      }
    }
  },
  methods: {
    ...mapMutations('posterMaker', ['setTitle'])
  }
}
</script>

<style lang="scss" scoped>
#title-input {
  width: 100%;
}
</style>