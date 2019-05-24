<template>
    <div class="container-detail">
        <div class="character">
            <div class="character__left">
                <img :src="character.image" alt="character-image" class="character__image">
            </div>
            <div class="character__right">
                <h3 class="character__name">{{character.name}}</h3>
                <p class="character__played-by">played by <span class="color-yellow">{{character.actor }}</span> </p>
                <div class="character__run">
                    <p> appearance meter <span class="noe">( {{ character.appearances.length }} episodes )</span> </p>
                    <div class="progress">
                        <div class="progress__main"></div>
                    </div> 
                </div>
                <p class="character__house">Theon Greyjoy is of  <span class="color-yellow">House Stark </span> </p>
                <p class="character__first-seen"><span class="color-yellow">{{character.first_seen}} </span>  was {{ thirdPerson }} first scene   </p>
                <button class="btn btn-favourite">Add To Favourites 💜 😍 💗</button>
            </div>
        </div>
        <div class="description">
            <h3 class="description__header"> Relations </h3>
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
    computed: {
        parents() {
            const parents = []
            if (this.character.mother) {
                parents.push(this.character.mother)
            }
            else if(this.character.father) {
               parents.push(this.character.father)
            }
            return parents
        },
        firstPerson() {
            if ( this.character.gender === "male" ) {
                return "he"
            }
            return "she"
        },
        thirdPerson(){
            if ( this.character.gender === "male" ) {
                return "his"
            }
            return "her"
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
        width: 60%;
        margin: 5rem auto;
        margin-top: 10rem;
        position: relative;
    }
    .character {
        display: flex;
    }
    .character__left  {
        flex-basis: 40%;
    }
    .character__image {
        max-width: 100%;
        border-radius: 3px;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    }
    .character__right {
        flex-basis: 60%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem 6rem;
        color: white;

    }
    .character__name {
        font-size: 4rem;
        font-weight: 400;
        color: var(--color-secondary);
        margin-bottom: 2rem;
    }
    .character__played-by{
        font-size: 1.6rem;
        margin-bottom: 2rem;
      
    }
    .character__run {
        font-size: 1.4rem;
        color: #bdbdbd;
        margin-bottom: 2rem;
    }
    .color-yellow {
        text-decoration-line: underline;
        text-underline-position: under;
        text-decoration-color:var(--color-decor);
        font-size: 2rem;
        font-weight: 600;
    }
    .character__house, .character__first-seen {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
    .progress {
        background-color: var(--color-tertiary);
        border-radius: 3px;
        margin-top: 1rem;
    }
    .progress__main {
        width: 70%;
        height: 1rem;
        border-radius: 3px;
        background-color: var(--color-decor);
        text-align: center;
        line-height: 30px; 
        color: white; 
    }
    .noe {
        color: white;
    }
    .btn-favourite {
        padding: 1.5rem 2rem;
        border: none;
        border-radius: 3px;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
        background-color: var(--color-secondary);
        color: var(--color-primary);
        font-size: 1.4rem;
        transition: all 0.5s;
        cursor: pointer;
    }
    .btn {
        margin-top: 4rem;
    }
    .description {
        margin: 10rem 0 5rem 0;
    }
    .description__header {
        font-size: 2rem;
        color: var(--color-secondary)
    }
</style>