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
                        <div class="progress__main" :style="{width: meter + '%'}"></div>
                    </div> 
                </div>
                <p class="character__house">{{character.name}} is of  <span class="color-yellow">{{character.house}}</span> </p>
                <p class="character__first-seen">
                    <span class="color-yellow">
                        {{character.first_seen}} 
                    </span>  
                    was {{ thirdPerson }} first scene   
                </p>
                <a class="btn btn-outline" 
                    :href="characterLink"
                    target="_blank"> 
                    Find More on this character <span>&#10148;</span>
                </a>
            </div>
        </div>
        <div class="description">
            <h3 class="description__header"> Relations </h3>
            <p class="description__text">Friends, Foe, Allies, Family, Enemies </p>
            <div class="card-container">
                <div class="card" v-for="character in character.related" 
                                  :key="character._id" 
                                  @click="routeTo(character.slug)">
                    <p class="name">{{character.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { controller } from './mixins/controller'
import { mapActions } from  'vuex'
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
        },
        characterLink() {
            return `https://gameofthrones.fandom.com/wiki/${this.character.slug}`
        },
        meter() {
            return (this.character.appearances.length / 73.0) * 100
        }
    },
    methods: {
        ...mapActions([
            'getCharacter',
        ]),
        routeTo(slug) {
            this.$router.push({name: 'character', params: {id: slug}})
        },
        async currentCharacter() {
            this.character = await this.getCharacter(this.$route.params.id)
        }
    },
    mounted() {
       this.currentCharacter()
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
    .btn {
        margin-top: 4rem;
    }
    .description {
        margin: 10rem 0 5rem 0;
    }
    .description__header {
        font-size: 2rem;
        color: var(--color-secondary);
       
    }
    .description__text {
        font-size: 1.7rem;
        margin-top: 2rem;
        margin-bottom: 5rem;
        color: var(--color-secondary);
    }
    .card-container {
        grid-gap: 1rem;
    }
     .card {
        background-color: transparent;
        border: 2px solid var(--color-tertiary);
    }
    .card:hover {
        background-color: var(--color-tertiary);
    }
    .name {
        font-size: 1.6rem;
        font-weight: 510;
        color: white
    }
    .episodes {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 0.5rem;
    }
    .episode {
        background-color: var(--color-tertiary);
        font-size: 1.4rem;
        color: white;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a:link, a:visited {
        text-decoration: none;
    }
</style>