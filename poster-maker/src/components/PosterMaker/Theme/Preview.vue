<template>
<div id="preview">
  <Artboard></Artboard>
</div>
</template>

<script>
import Artboard from '@/components/PosterMaker/Preview/Artboard'

export default {
  components: { Artboard }
}
</script>

<style lang="scss" scoped>
#preview {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>