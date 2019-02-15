import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'https://api.got.show/api'

const filterSearch = (name, state ,query) => {
    if (state[name + 'Count'] <= 0) {
        state.search = state[name].slice()
    }
    if (!query) {
        state[name] = state.search
    }
    state[name + 'Count']++
    state[name] = state.search.filter((obj)=> {
        const regex = new RegExp(query, 'gi')
        return obj.name.match(regex)
    })
}

const searchBy = (obj, state) => {
    filterSearch(obj.name, state, obj.query)
}

export default new Vuex.Store({
  state: {
      characters: [],
      houses:[],
      isLoading: true,
      search: [],
      charactersCount: 0,
      housesCount: 0,
      paginateBy: 50,
  },
  mutations: {
    'SET_CHARACTERS'(state, characters) {
        state.characters = characters
        state.characters.sort((a,b)=> parseFloat(b.pageRank)- parseFloat(a.pageRank))
    },
    'SET_HOUSES'(state, houses) {
        state.houses = houses
    },
    'PAGINATE_BY'(state, count) {
        state.paginateBy += count
    },
    'FILTER_BY_SEARCH'(state, obj) {
        searchBy(obj, state)
    }
  },
  actions: {
      async setAllCharacters({commit,state}, url){
          let characters = await axios.get(`${baseUrl}${url}`)
          commit('SET_CHARACTERS', characters.data)
          state.isLoading = false
      },
      async setAllHouses({commit, state}, url) {
        let houses = await axios.get(`${baseUrl}${url}`)
        commit('SET_HOUSES', houses.data)
        state.isLoading = false
      },
      filterBySearch({commit}, obj) {
          commit('FILTER_BY_SEARCH', obj)
      },
      setPaginateBy({commit}, count) {
          commit('PAGINATE_BY', count)
      }
  },
  getters: {
      characters(state) {
          return state.characters.slice(0,state.paginateBy)
      },
      houses(state) {
          return state.houses
      },
      isLoading(state) {
          return state.isLoading
      },
      paginateBy(state) {
          return state.paginateBy
      }
      
  }
})