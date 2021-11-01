const state = {
    title: '',
    subject: '',
    date: '',
    time: '',
    location: '',
    colors: [],
    selectedColor: undefined,
    layouts: [],
    selectedLayout: undefined,
    fonts: [],
    selectedFont: undefined
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
    // to use axios to make backend calls
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}