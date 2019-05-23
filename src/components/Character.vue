<template>
    <div class="container-detail">
        <div class="character" v-for="character in characters" :key="character._id">
            <div class="character__left">
                <img :src="character.image" alt="character-image" class="character__image">
            </div>
            <div class="character__right">
                <h3 class="character__name">Theon Greyjoy</h3>
                <p class="character__played-by">Thomas Muller</p>
                <p class="character__run"> <span class="color-yellow">25</span> appearances</p>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { controller } from './mixins/controller'
import {BASE_URL} from '../main'
export default {
    mixins: [controller],
    data() {
        return {
            character: {
                name: '',
                house: '',
                books: [],
                titles: [],
                spouse: '',
                mother: '',
                father: '',
                heir: '',
            }
        }
    },
    methods: {
        async getCharacter() {
            const url = `${BASE_URL}/show/characters/bySlug/${this.$route.params.id}/`
            let character = await axios.get(url)
            this.character = character.data
            console.log(this.character)
        }
    },
    mounted() {
       this.getCharacter()
    }
}
</script>

<style scoped>
    .container-detail {
        width: 50%;
        margin: 5rem auto;
        margin-top: 10rem;
        position: relative;
    }
</style>