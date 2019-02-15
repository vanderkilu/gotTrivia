<template>
     <div class="container-detail">
        <p class="character-main">Biography of <span class="green">{{house.name}}</span> </p>
        <transition :name="transitionName">
            <div class="card" v-if="count === 0" key="1">
                <p class="name">{{house.name}}</p>
            </div>
            <div class="card"  v-else-if="count === 1" key="2">
                <p class="heading">title</p>
                <p class="value">{{house.title}}</p>
            </div>
            <div class="card"  v-else-if="count === 2" key="3">
                <p class="heading">region</p>
                <p class="value">{{house.region}}</p>
            </div>
            <div class="card"  v-else-if="count === 3" key="4">
                <p class="heading">overload</p>
                <p class="value">{{house.overload}}</p>
            </div>
            <div class="card"  v-else-if="count === 4" key="5">
                <p class="heading">coat of arms</p>
                <p class="value">{{house.coatOfArms}}</p>
            </div>
            <div class="card"  v-else-if="count === 5" key="6">
                <p class="heading">current lord</p>
                <p class="value">{{house.currentLord}}</p>
            </div>
        </transition>
         <span class="control control-left" @click="prev('houses')"> <i class="left-arrow"> &lt;</i> </span>
        <span class="control control-right" @click="next(5)"><i class="right-arrow"> &gt;</i></span>
    </div>
</template>

<script>
import { controller } from './mixins/controller'
import axios from 'axios'
export default {
    mixins: [controller],
    data() {
        return {
            house: {
                name: '',
                title: '',
                overload: '',
                coatOfArms: '',
                region: '',
                currentLord: ''
            }
        }
    },
    methods: {
        async getHouse() {
            let house = await axios.get(`https://api.got.show/api/houses/byId/${this.$route.params.id}/`)
            this.house = house.data.data
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
    .character-main {
        text-align: center;
        font-size: 2rem;
        color: white;
        margin-bottom: 5rem;
    }
    .card {
        padding: 4rem;
        min-height: 20rem;
        border-radius: 3px;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #304860;
        transition: all 0.5s;
        text-align: center;
    }
    .name {
        font-size: 1.7rem;
        color: white;
        font-weight: 300;
    }
    .heading {
        font-size: 1.7rem;
        color: white;
        margin-bottom: 1rem;
        text-transform: uppercase;
        color: #307878;
    }
    .value {
        font-size: 1.4rem;
        color: #eeeeee;
        margin: 0.5rem;
    }
    .control{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        position: absolute;
        color: #307878;
        font-size: 2rem;
        font-weight: 200;
        background-color: white;
        z-index: 1;
    }
    .control:active {
        outline: none;
    }
    .green {
        color: #307878;
    }
    @media only screen and (max-width: 900px) {
        .container-detail {
            width: 90%;
        }
        .control-right {
            top: 120%;
            right: 5rem;
        }
        .control-left {
            top: 120%;
            left: 5rem;
        }
        .heading {
            font-size: 2rem;
        }
        .value {
            font-size: 1.7rem;
        }
        .card {
            line-height: 1.4;
            color: #bdbdbd;
        }
    }
</style>


