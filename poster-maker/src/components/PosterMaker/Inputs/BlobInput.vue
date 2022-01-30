<template>
  <div id="blob-input" @click="activateBlobs" :class="this.blobs.length > 0 ? 'selected': undefined">
    <div class="title">Blobs</div>
    <div @click="randomise" class="icon">
      <span class="material-icons-outlined">
      casino
    </span>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  data: function () {
    return {
      blobCount: 3
    }
  },
  computed: {
    ...mapState('posterMaker', ['blobs'])
  },
  methods: {
    ...mapMutations('posterMaker', [
      'setBlob',
      'removeBlob',
      'removeOneBlob',
      'resetBlobs'
    ]),
    randomise(e) {
      e ? e.stopPropagation() : undefined
      this.resetBlobs()
      for (let i = 0; i < this.blobCount; i++) {
        this.addBlob(this.generateBlob())
      }
    },
    activateBlobs() {
      if (this.blobs.length === 0) {
        for (let i = 0; i < this.blobCount; i++) {
          this.addBlob(this.generateBlob())
        }
      }
    },
    generateBlob() {
      let percentage1 = Math.floor(Math.random() * 60 + 20)
      let percentage3 = Math.floor(Math.random() * 60 + 20)
      let percentage4 = Math.floor(Math.random() * 60 + 20)
      let percentage2 = Math.floor(Math.random() * 60 + 20)
      let percentage11 = 100 - percentage1
      let percentage21 = 100 - percentage2
      let percentage31 = 100 - percentage3
      let percentage41 = 100 - percentage4
      let borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`
      let blob = document.createElement('div')
      blob.classList.add('blob')
      blob.style.borderRadius = borderRadius
      //opacity range: 0.07- 0.15
      blob.style.opacity = ((Math.random() * 8 + 7) / 100).toFixed(2)
      blob.randomWH = Math.random()
      blob.randomVerticalAlign = Math.random()
      blob.randomHorizontalAlign = Math.random()
      return blob
    },
    addBlob(blob) {
      this.setBlob(blob)
    },
    clearBlobs() {
      this.resetBlobs()
    }
  }
}
</script>

<style lang="scss" scoped>
#blob-input {
  width: 100%;
  padding: 8px 8px 8px 16px;
  display: flex;
  color: #505050;
  font-size: .9rem;
  border-radius: 4px;
  font-weight: normal;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #E4E4E4;
  transition: all 200ms ease;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
    border-color: #1ba5ec;

    span {
      animation: wobble-hor-bottom 1s cubic-bezier(0.645, 0.045, 0.355, 1.000) both;
    }
  }

  &.selected {
    color: #000000;
    border-color: #1ba5ec;
  }

  .title {

  }
  .icon {
    outline: none;
    border: none;
    background-color: #ffffff;
    padding: 8px;
    display: flex;
    margin-left: auto;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: #efefef;
    }
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-3px) rotate(-6deg);
  }
  30% {
    transform: translateX(1.5px) rotate(6deg);
  }
  45% {
    transform: translateX(-1.5px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(0.9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-0.6px) rotate(-1.2deg);
  }
}
</style>