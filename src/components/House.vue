<template>
    <div class="container-detail">
        <h3 class="house__name">{{house.name}}</h3>
        <div class="house__details">
            <div class="house__wrapper">
                <p class="house__text">Seat</p>
                <p v-if="house.seat.length > 0" class="house__detail">
                    <span v-for="seat in house.seat" :key="seat">
                        {{seat}}
                    </span>
                </p>
                <p v-else class="house__detail">Unknown</p>
            </div>
            <div class="house__wrapper">
                <p class="house__text">Region</p>
                <p v-if="house.region.length > 0" class="house__detail">
                    <span v-for="region in house.region" :key="region">
                        {{region}}
                    </span>
                </p>
                <p v-else class="house__detail">Unknown</p>
            </div>
            <div class="house__wrapper">
                <p class="house__text">Sigil</p>
                <p class="house__detail">{{house.sigil || 'Unknown'}}</p>
            </div>
            <div class="house__wrapper">
                <p class="house__text">Words</p>
                <p class="house__detail">{{house.words || 'Unknown'}}</p>
            </div>
        </div>
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
        width: 50%;
        margin: 5rem auto;
        margin-top: 10rem;
        position: relative;
    }
    .house__details {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 2rem;
    }
    .house__wrapper {
        display: flex;
        padding: 2rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-tertiary);
        border-radius: 3px;
        min-height: 15rem;
    }
    .house__detail {
        font-size: 1.3rem;
        color: var(--color-secondary);
        text-align: center;
    }
    .house__name {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-secondary);
    }
    .house__text {
        font-size: 1.8rem;
        color: var(--color-secondary);
        margin-bottom: 2rem;
        font-weight: 600;
    }
</style>


