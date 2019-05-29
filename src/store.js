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
      isCharacterLoading:true,
      isHouseLoading: true,
      search: [],
      charactersCount: 0,
      housesCount: 0,
      paginateBy: 50,
      currentLoader: ''
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
    },
    'SET_CURRENT_LOADER'(state, loader) {
        state.currentLoader = loader
    },
    'SET_FILTERED_CHARACTERS'(state, characters) {
        state.characters = characters
    }
  },
  actions: {
       /*only makes network request 
       if characters array does not exist 
       **/
      async setAllCharacters({commit,state}, url){
          if (state.characters.length === 0) {
            let characters = await axios.get(`${baseUrl}${url}`)
            commit('SET_CHARACTERS', characters.data)
            state.isCharacterLoading = false
          }
      },
      /*only makes network request 
      if houses array does not exist 
      **/
      async setAllHouses({commit, state}, url) {
        if (state.houses.length === 0) {
            let houses = await axios.get(`${baseUrl}${url}`)
            commit('SET_HOUSES', houses.data)
            state.isHouseLoading = false
        }
        
      },
      /*find character from existing character array.
        No character?, make network request for it.
      **/
      getCharacter({state}, id) {
          const url = `${baseUrl}/show/characters/bySlug/${id}/`
          if (state.characters.length > 0) {
            const character = state.characters.find(character => {
                return character.slug === id
            })
            if (character) {
                return Promise.resolve(character)
            }
            return axios.get(url).then((data) => data.data)
          }
          return axios.get(url).then((data) => data.data)
      },
      /*find house from existing house array.
        No house?, make network request for it.
      **/
      getHouse({state}, id) {
        const url = `${baseUrl}/show/houses/${id}/`
        if (state.houses.length > 0) {
          const house = state.houses.find(house => {
              return house.name === id
          })
          if (house) {
            return Promise.resolve(house)
          }
          return axios.get(url).then((data) => data.data[0])
        }
        return axios.get(url).then((data) => data.data[0])
      },
      filterBySearch({commit}, obj) {
          commit('FILTER_BY_SEARCH', obj)
      },
      setPaginateBy({commit}, count) {
          commit('PAGINATE_BY', count)
      },
      setCurrentLoader({commit}, loader) {
          commit('SET_CURRENT_LOADER', loader)
      },
      setFilteredCharacters({commit}, characters) {
          commit('SET_FILTERED_CHARACTERS', characters)
      }
  },
  getters: {
      characters(state) {
          return state.characters.slice(0,state.paginateBy)
      },
      allCharacters(state) {
          return state.characters
      },
      houses(state) {
          return state.houses
      },
      isLoading(state) {
            if (state.currentLoader === 'characters')
                return state.isCharacterLoading
            return state.isHouseLoading
      },
      paginateBy(state) {
          return state.paginateBy
      }
  }
})