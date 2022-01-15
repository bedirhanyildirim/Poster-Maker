const state = {
  title: 'Poster Maker',
  subject: 'The cool way of poster design',
  date: '01/01/2022',
  time: '20:12',
  location: 'bedirhan.design',
  colors: [],
  selectedColor: undefined,
  layouts: {
    LEFT: 'LEFT',
    CENTER: 'CENTER',
    RIGHT: 'RIGHT'
  },
  selectedLayout: 'LEFT',
  fonts: [],
  selectedFont: undefined,
  toolBarMenu: {
    TEXT: 'TEXT',
    FONT: 'FONT',
    ALIGN: 'ALIGN',
    COLOR: 'COLOR',
    BACKGROUND: 'BACKGROUND'
  },
  selectedToolBar: 'TEXT',
  artboards: [],
  selectedArtboard: undefined
}

const getters = {
  // if you need something formatted such as from Object to Array
}

const mutations = {
  setTitle(state, title) {
    state.title = title
  },
  setSubject(state, subject) {
    state.subject = subject
  },
  setDate(state, date) {
    state.date = date
  },
  setTime(state, time) {
    state.time = time
  },
  setLocation(state, location) {
    state.location = location
  },
  setColors(state, colorSets) {
    state.colors = colorSets
  },
  setColor(state, color) {
    state.selectedColor = color
  },
  setLayouts(state, layouts) {
    state.layouts = layouts
  },
  setLayout(state, layout) {
    state.selectedLayout = layout
  },
  setFonts(state, fonts) {
    state.fonts = fonts
  },
  setFont(state, font) {
    state.selectedFont = font
  },
  setToolBar(state, menu) {
    state.selectedToolBar = menu
  },
  setArtboards(state, artboards) {
    state.artboards = artboards
  },
  setArtboard(state, artboard) {
    state.selectedArtboard = artboard
  }
}

const actions = {
  async getGoogleFonts({commit}) {
    const googleFontsUrl = 'https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=' + process.env.VUE_APP_GOOGLE_FONT_API_KEY
    const allFonts = await fetch(googleFontsUrl)
                      .then(res => res.json())
    commit('setFonts', allFonts.items.slice(0, 10))
    commit('setFont', allFonts.items[0])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}