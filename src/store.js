import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'https://api.got.show/api'

export default new Vuex.Store({
  state: {
      characters: [],
      isLoading: true,
      search: [],
      count: 0,
      paginateBy: 50,
  },
  mutations: {
    'SET_CHARACTERS'(state, characters) {
        state.characters = characters
        state.characters.sort((a,b)=> parseFloat(b.pageRank)- parseFloat(a.pageRank))
    },
    'PAGINATE_BY'(state, count) {
        state.paginateBy += count
    },
    'FILTER_BY_SEARCH'(state, query) {
        if (state.count <= 0) {
            state.search = state.characters.slice()
        }
        if (!query) {
            state.characters = state.search
        }
        state.count++
        state.characters = state.search.filter((character)=> {
            const regex = new RegExp(query, 'gi')
            return character.name.match(regex)
        })
    }
  },
  actions: {
      async setAllCharacters({commit,state}, url){
          let characters = await axios.get(`${baseUrl}${url}`)
          commit('SET_CHARACTERS', characters.data)
          state.isLoading = false
      },
      filterBySearch({commit}, query) {
          commit('FILTER_BY_SEARCH', query)
      },
      setPaginateBy({commit}, count) {
          commit('PAGINATE_BY', count)
      }
  },
  getters: {
      characters(state) {
          return state.characters.slice(0,state.paginateBy)
      },
      isLoading(state) {
          return state.isLoading
      },
      paginateBy(state) {
          return state.paginateBy
      }
      
  }
})