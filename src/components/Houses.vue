<template>
    <div class="container">
        <app-search name="houses"></app-search>
        <div class="card-container">
            <div class="card" v-for="house in houses" :key="house._id" @click="routeTo(house._id)">
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
export default {
    computed: {
        ...mapGetters([
            'houses'
        ])
    },
    methods: {
        ...mapActions([
            'setAllHouses'
        ])
    },
    mounted() {
        this.setAllHouses('/houses/')
    },
    components: {
        appSearch: Search,
        appLoader: Loader
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
</style>