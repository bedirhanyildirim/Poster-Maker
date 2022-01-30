<template>
  <div id="blob-input" @click="activateBlobs" :class="this.blobs.length > 0 ? 'selected': undefined">
    <div class="title">Blobs</div>
    <div class="count" :style="{opacity: this.blobs.length > 0 ? 1 : 0}">
      <div class="icon add" @click="addOneBlob">
      <span class="material-icons-outlined">
        add
      </span>
      </div>
      <div class="icon remove" @click="deleteOneBlob">
      <span class="material-icons-outlined">
        remove
      </span>
      </div>
    </div>
    <div @click="randomise" class="icon random">
      <span class="material-icons-outlined">
      casino
    </span>
    </div>
    <div @click="clearBlobs" class="icon close" :style="{opacity: this.blobs.length > 0 ? 1 : 0}">
      <span class="material-icons-outlined">
        close
      </span>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from "vuex";

export default {
  data: function () {
    return {
      blobCount: 3
    }
  },
  mounted() {
    if (this.blobs.length > 0) {
      this.blobCount = this.blobs.length
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
      let targetCount = this.blobs.length === 0 ? this.blobCount : this.blobs.length
      this.resetBlobs()
      for (let i = 0; i < targetCount; i++) {
        this.addBlob(this.generateBlob())
      }
    },
    activateBlobs() {
      if (this.blobs.length === 0) {
        for (let i = 0; i < 3; i++) {
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
    clearBlobs(e) {
      e ? e.stopPropagation() : undefined
      this.resetBlobs()
    },
    addOneBlob() {
      if (this.blobCount < 4) {
        this.addBlob(this.generateBlob())
        this.blobCount++
      }
    },
    deleteOneBlob() {
      if (this.blobCount > 1) {
        this.removeOneBlob()
        this.blobCount--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#blob-input {
  width: 100%;
  display: flex;
  color: #666666;
  font-size: .9rem;
  border-radius: 4px;
  font-weight: normal;
  align-items: center;
  padding: 8px 8px 8px 16px;
  background-color: #ffffff;
  border: 1px solid #E4E4E4;
  transition: all 200ms ease;
  justify-content: flex-start;

  &:hover {
    color: #000000;
    cursor: pointer;
    border-color: #1ba5ec;

    .random span {
      animation: wobble-hor-bottom 1s cubic-bezier(0.645, 0.045, 0.355, 1.000) both;
    }
  }

  &.selected {
    color: #000000;
    border-color: #1ba5ec;
    .random {
      color: #000000;
    }
  }

  .count {
    display: flex;
    margin-left: auto;
    justify-content: center;
  }

  .icon {
    border: none;
    display: flex;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    transition: all 200ms ease;

    &:hover {
      background-color: #efefef;
    }
    span {
      font-size: 20px;
    }
  }

  .add {
    padding: 4px;
    color: #666666;
  }

  .remove {
    padding: 4px;
    color: #666666;
  }

  .random {
    border: none;
    padding: 8px;
    display: flex;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }

  .close {
    color: #666666;
    &:hover {
      color: #000000;
      background-color: unset;
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