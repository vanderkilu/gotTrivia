<template>
    <div class="container">
        <app-search name="houses"></app-search>
        <!-- <app-warning></app-warning> -->
        <div class="card-container">
            <div class="card" v-for="house in houses" :key="house._id" @click="routeTo(house.name)">
                <p class="name">{{house.name}}</p>
            </div>
        </div>
        <app-loader></app-loader>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Search from './Search.vue'
import Loader from './Loader.vue'
import Warning from './Warning.vue'
import { imagePlaceholder } from '../helpers'
export default {
    data() {
        return {
            imagePlaceholder
        }
    },
    computed: {
        ...mapGetters([
            'houses'
        ])
    },
    methods: {
        ...mapActions([
            'setAllHouses',
            'setCurrentLoader'
        ]),
        routeTo(slug) {
            this.$router.push({name: 'house', params: {id: slug}})
        }
    },
    mounted() {
        this.setAllHouses('/show/houses/')
        this.setCurrentLoader('houses')
    },
    components: {
        appSearch: Search,
        appLoader: Loader,
        appWarning: Warning
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
        font-weight: 600;
        color: white;
        margin-bottom: 2rem;
        text-align: center;
    }
    .title {
        font-size: 1.2rem;
        color: #1b5e20;
        padding: 0.5rem 1.5rem;
        background-color: #e8f5e9;
        border-radius: 4rem;
    }
    @media only screen and (max-width: 900px) { 
         .container {
             width: 70%;
             text-align: center;
         }
     }
</style>