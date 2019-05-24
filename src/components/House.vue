<template>
     <div class="container-detail">
    </div>
</template>

<script>
import { controller } from './mixins/controller'
import axios from 'axios'
import {BASE_URL} from '../main'
export default {
    mixins: [controller],
    data() {
        return {
            house: {
                name: '',
                seat: [],
                region: [],
                sigil: '',
                words: ''
            }
        }
    },
    methods: {
        async getHouse() {
            const url = `${BASE_URL}/show/houses/${this.$route.params.id}/`
            let house = await axios.get(url)
            console.log(house)
            this.house = house.data[0]
        }
    },
    mounted() {
        this.getHouse()
    }
}
</script>


<style scoped>
.container-detail {
        width: 60%;
        margin: 5rem auto;
        margin-top: 10rem;
        position: relative;
    }
</style>


