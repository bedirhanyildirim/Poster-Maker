<template>
<div id="location-input">
  <CustomInputText
    :clearable="true"
    icon-name="place"
    placeholder="location"
    v-model="selectedLocation">
  </CustomInputText>
</div>
</template>

<script>
import CustomInputText from "@/components/PosterMaker/CostumInput/CustomInputText";
import {mapMutations, mapState} from "vuex";

export default {
  components: {
    CustomInputText
  },
  computed: {
    ...mapState('posterMaker', ['location']),
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
    ...mapMutations('posterMaker', ['setLocation'])
  }
}
</script>

<style lang="scss" scoped>
#location-input {
  width: 100%;
}
</style>