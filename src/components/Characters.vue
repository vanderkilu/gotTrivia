<template>
    <div class="container">
        <app-search name="characters"></app-search>
        <app-warning></app-warning>
        <div class="card-container">
            <div class="card" v-for="character in characters" :key="character._id" @click="routeTo(character.slug)">
                <p class="name">{{character.name}}</p>
                <p class="house">{{character.house || 'unknown'}}</p>
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
        width: 60%;
        margin: 5rem auto;
        
    }
    .name {
        font-size: 1.5rem;
        color: white;
        margin-bottom: 2rem;
    }
    .house {
        font-size: 1.2rem;
        color: #1b5e20;
        padding: 0.5rem 1.5rem;
        background-color: #e8f5e9;
        border-radius: 4rem;
    }
    
     @media only screen and (max-width: 900px) { 
         .container {
             width: 70%;
         }
     }
</style>