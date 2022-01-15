<template>
  <div id="artboards">
    <div class="title">
      <h2>Artboards</h2>
    </div>
    <ArtboardInput></ArtboardInput>
  </div>
</template>

<script>
import ArtboardInput from '@/components/PosterMaker/Inputs/ArtboardInput'
import {mapMutations} from "vuex";
export default {
  components: { ArtboardInput },
  data(){
    return {
      artboards: [
        {
          name: 'Square',
          ratio: '1:1'
        },
        {
          name: 'Portrait',
          ratio: '9:16'
        },
        {
          name: 'Landscape',
          ratio: '16:9'
        }
      ]
    }
  },
  mounted() {
    this.setArtboards(this.artboards)
    this.setArtboard(this.artboards[0])
  },
  methods: {
    ...mapMutations('posterMaker', ['setArtboards', 'setArtboard'])
  }
}
</script>

<style lang="scss" scoped>
#artboards {
  margin: 0;
  padding: 16px;
  width: 302px;
  display: flex;
  flex-direction: column;
  background-color: #F7F7F7;
  border-left: 2px solid #E4E4E4;

  .title h2{
    color: #9F9F9F;
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 16px;
  }
}
</style>