<template>
    <div class="container">
        <app-search name="characters"></app-search>
        <div class="character-container">
        <div class="character" 
             v-for="character in characters" 
             :key="character._id" 
             @click="routeTo(character.slug)"
        >
             <img :src="character.image" alt="character-image" class="character__image">
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
export default {
    components: {
        appSearch: Search,
        appLoader: Loader,
        appWarning: Warning
    },
    computed: {
        ...mapGetters([
            'characters',
            'paginateBy'
        ])
    },
    methods: {
        ...mapActions([
            'setAllCharacters',
            'setPaginateBy',
            'setCurrentLoader'
        ]),
        scroll() {
            window.onscroll = ()=> {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
                if (bottomOfWindow) {
                    let by = this.paginateBy += 10
                    setTimeout(()=>this.setPaginateBy(by), 1000)
                    
                }
            }
        },
        routeTo(slug) {
            this.$router.push({name: 'character', params: {id: slug}})
        }
    },
    mounted() {
        this.setAllCharacters('/show/characters')
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
</style>