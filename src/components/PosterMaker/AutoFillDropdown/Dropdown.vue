<template>
<div id="autocomplete-dropdown">
  <input class="search-input" type="text" placeholder="Search name" v-model="searchValue" @input="creatQuery" />
  <div class="dropdown" v-if="this.searchResult.length > 0">
    <div
      class="dropdown-item"
      v-for="item in this.getItems"
      @click="selectItem(item)"
      :class="isSelected(item.name) ? 'selected' : undefined"
      :key="item.id">
      <div v-html="highlightChars(item.name)"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  //display no result
  data: function () {
    return {
      searchValue: '',
      selectedValue: undefined,
      searchResult: []
    }
  },
  computed: {
    getItems() {
      return this.searchResult
    }
  },
  mounted() {
  },
  methods: {
    async creatQuery () {
      if (this.searchValue.length >= 3) {
        this.searchResult = []
        let result = this.search()
        result.then(res => {
          this.searchResult = res
        })
      } else {
        this.searchResult = []
      }
    },
    async search() {
      const baseURL = 'https://61824bbb84c2020017d89da4.mockapi.io/api/v1/names'
      const urlWithParams = baseURL + '?name=' + this.searchValue
      return await fetch(urlWithParams)
        .then(res => res.json())
        .then(res => res.items)
        .catch(error => {
          console.log(error.message)
        })
    },
    selectItem (item) {
      this.selectedValue = item
      this.searchValue = item.name
      this.searchResult = []
    },
    isSelected(itemName) {
      if (this.selectedValue)
        return itemName === this.selectedValue.name
    },
    highlightChars(name) {
      let nameLowerCase = name.toLowerCase()
      let targetText = '<span style="background-color: #39b4f6;">'+ this.searchValue +'</span>'
      return nameLowerCase.replace(this.searchValue.toLowerCase(), targetText)
    }
  }
}
</script>

<style lang="scss" scoped>
#autocomplete-dropdown {
  width: 100%;
  position: relative;
  border-radius: 4px;
  border: 1px solid #E4E4E4;

  .search-input {
    width: 100%;
    padding: 16px;
    color: #666666;
    font-size: .9rem;
    border-radius: 4px;
  }


  &:hover, &:focus {
    color: #000000;
    border-color: #1ba5ec;
  }

  .dropdown {
    width: 100%;
    padding: 8px;
    position: absolute;
    border-radius: 4px;
    top: calc(100% + 8px);
    border: 1px solid #E4E4E4;
    background-color: #ffffff;

    .dropdown-item {
      padding: 8px;
      cursor: pointer;
      border-bottom: 1px solid #E4E4E4;

      &:last-child {
        border: none;
      }

      &:hover {
        background-color: #f1f1f1;
      }

      &.selected {
        background-color: #E4E4E4;
      }
    }
  }
}
</style>