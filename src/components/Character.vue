<template>
    <div class="container-detail">
        <p class="character-main">Biography of <span class="green">{{character.name}}</span> </p>
        <transition :name="transitionName">
            <div class="card" v-if="count === 0" key="1">
                <p class="name">{{character.name}}</p>
            </div>
            <div class="card"  v-else-if="count === 1" key="2">
                <p class="heading">house</p>
                <p class="value">{{character.house}}</p>
            </div>
            <div class="card"  v-else-if="count === 2" key="3">
                <p class="heading">Titles</p>
                <p class="value" v-for="title in character.titles" :key="title">{{title}}</p>
            </div>
            <div class="card"  v-else-if="count === 3" key="4">
                <p class="heading">Books</p>
                <p class="value" v-for="book in character.books" :key="book">{{book}}</p>
            </div>
            <div class="card"   v-else-if="count === 4" key="5">
                <p class="heading">spouse</p>
                <p class="value">{{character.spouse || 'unmarried' }}</p>
            </div>
            <div class="card"   v-else-if="count === 5" key="6">
                <p class="heading">culture</p>
                <p class="value">{{character.culture || 'unknown' }}</p>
            </div>
            <div class="card"   v-else-if="count === 6" key="7">
                <p class="heading">Gender</p>
                <p class="value">{{character.male ? 'male': 'female'}}</p>
            </div>
        </transition>
         <span class="control control-left" @click="prev('characters')"> <i class="left-arrow"> &lt;</i> </span>
        <span class="control control-right" @click="next(6)"><i class="right-arrow"> &gt;</i></span>
    </div>
</template>


<script>
import axios from 'axios'
import { controller } from './mixins/controller'
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
            let character = await axios.get(`https://api.got.show/api/characters/byId/${this.$route.params.id}/`)
            this.character = character.data.data
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
            right: 2rem;
        }
        .control-left {
            top: 120%;
            left: 2rem;
        }
        .heading {
            font-size: 2rem;
        }
        .value {
            font-size: 1.7rem;
            font-weight: 400;
        }
        .card {
            line-height: 1.4;
            color: #bdbdbd;
            min-height: 30rem;
        }
    }
</style>