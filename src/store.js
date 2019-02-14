import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'https://api.got.show/api/'

export default new Vuex.Store({
  state: {
      characters: []
  },
  mutations: {
    'SET_CHARACTERS'(state, characters) {
        state.characters = characters
    }
  },
  actions: {
      async GetAllCharacters({commit}){
          let characters = await axios.get(`${baseUrl}/characters/`)
          commit('SET_CHARACTERS', characters.data)
      }
    
  },
  getters: {
      characters(state) {
          return state.characters
      }
  }
})