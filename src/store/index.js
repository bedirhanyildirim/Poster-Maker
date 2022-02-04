import Vue from 'vue'
import Vuex from 'vuex'
import posterMaker from '@/store/posterMaker'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posterMaker
  }
})
