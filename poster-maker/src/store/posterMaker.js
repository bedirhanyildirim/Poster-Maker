const state = {
    colors: [],
    selectedColor: {},
    layouts: [],
    selectedLayout: {},
    fonts: [],
    selectedFont: {}
}

const getters = {
    colors: (state) => state.colors,
    selectedColor: (state) => state.selectedColor,
    layouts: (state) => state.layouts,
    selectedLayout: (state) => state.selectedLayout,
    fonts: (state) => state.fonts,
    selectedFont: (state) => state.selectedFont
}

const mutations = {
    setColors(state, colorSets) {
        state.colors = colorSets
    },
    selectColor(state, colorSet) {
        state.colors = colorSet
    },
    setLayouts(state, layoutSets) {
        state.colors = layoutSets
    },
    selectLayout(state, layout) {
        state.colors = layout
    },
    setFonts(state, fontSets) {
        state.colors = fontSets
    },
    selectFont(state, font) {
        state.colors = font
    },
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}