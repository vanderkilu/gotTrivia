<template>
    <div class="container">
        <app-search name="characters"></app-search>
        <div class="characters__filter">
            <button class="btn-outline" @click="filterBy('all')">
                All
            </button>
            <button class="btn-outline" @click="filterBy('stark')">
                Starks
            </button>
            <button class="btn-outline" @click="filterBy('lannister')">
                Lannisters
            </button>
            <button class="btn-outline" @click="filterBy('bolton')">
                Boltons
            </button>
            <button class="btn-outline" @click="filterBy('greyjoy')">
               Greyjoys
            </button>
            <button class="btn-outline" @click="filterBy('baratheon')">
                Baratheons
            </button>
        </div>
        <div class="character-container">
        <div class="character" 
             v-for="character in characters" 
             :key="character._id" 
             @click="routeTo(character.slug)"
        >
             <img :src="character.image ? character.image : imgPlaceholder" 
                  alt="character-image" 
                  class="character__image">
             <h3 class="character__name">{{character.name}}</h3>
        </div>
        </div>
        <app-loader></app-loader>
    </div>
</template>



<script>
import Search from './Search.vue'
import Loader from './Loader.vue'
import Warning from './Warning.vue'
import {mapGetters, mapActions} from 'vuex'
import { imagePlaceholder } from '../helpers'
export default {
    data() {
        return {
            imgPlaceholder: imagePlaceholder,
        }
    },
    components: {
        appSearch: Search,
        appLoader: Loader,
        appWarning: Warning
    },
    computed: {
        ...mapGetters([
            'characters',
            'allCharacters',
            'paginateBy'
        ])
    },
    methods: {
        ...mapActions([
            'setAllCharacters',
            'setPaginateBy',
            'setCurrentLoader',
            'setFilteredCharacters'
        ]),
        scroll() {
            /* attempt to implement infinite scrolling
            **/
            window.onscroll = ()=> {
                let bottomOfWindow = document.documentElement.scrollTop + 
                    window.innerHeight === document.documentElement.offsetHeight
                if (bottomOfWindow) {
                    setTimeout(()=>this.setPaginateBy(this.paginateBy += 10), 1000)
                }
            }
        },
        routeTo(slug) {
            this.$router.push({name: 'character', params: {id: slug}})
        },
        async getCharacters() {
            await this.setAllCharacters('/show/characters')
            this.filterIt = this.strip()
        },
        /*keeps copy of all characters 
          and prevent direct mutation of the characters array
        **/
        strip() {
            const characters = this.allCharacters.slice()
            const stripeDown = (param) => {
                if (param === 'all') return characters
                return characters.filter(character => {
                    const regex = new RegExp(param, 'gi')
                    return character.name.match(regex)
                })
            }
            return stripeDown
        },
        filterBy(param) {
            this.setFilteredCharacters(this.filterIt(param))
        }
    },
    mounted() {
        this.getCharacters()
        this.setCurrentLoader('characters')
        this.scroll()
    }
}
</script>
<style scoped>
    .container {
        width: 90%;
        margin: 5rem auto;
        
    }
    .character-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 1rem;
    }
    .character {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-tertiary);
        padding: 2rem 0;
        box-shadow: 0 1rem 4rem rgba(0,0,0,0.04);
        margin-bottom: 2rem;
        cursor: pointer;
        transition: all 0.2s;
    }
    .character:hover {
        transform: translateY(-0.5rem);
    }
    .character__image {
        max-width: 60%;
        height: auto;
        border-radius: 2px;
    }
    .character__name {
        color: var(--color-secondary);
        font-size: 1.7rem;
        margin-top: 2rem;
        text-align: center;
    }
    .characters__filter {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 2rem;
        width: 60%;
        margin: 0 auto;
        margin-bottom: 3rem;
    }
    .btn-outline {
        padding: 1.5rem 2rem;
        background-color: transparent;
        border: 2px solid var(--color-tertiary);
        border-radius: 3px;
        color: var(--color-secondary);
        font-size: 1.5rem;
        cursor: pointer;
    }
    .btn-outline:focus {
        outline: none;
    }
    .btn-outline:hover {
        background-color: var(--color-tertiary);
    }
</style>