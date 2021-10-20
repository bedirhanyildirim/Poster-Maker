<template>
  <div id="posterMaker">
    <PosterMakerLayout>
      <div id="content">
        Content
      </div>
    </PosterMakerLayout>
  </div>
</template>

<script>
import PosterMakerLayout from "@/layout/PosterMaker"
export default {
  components: { PosterMakerLayout }
}
</script>

<style lang="scss" scoped>
#content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>