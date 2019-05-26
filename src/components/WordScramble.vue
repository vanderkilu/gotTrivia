<template>
    <div class="scramble">
        <p class="scramble__instruction"> Quess the name of the character below </p>
        <h3 class="scramble__word">{{word}}</h3>
        <div class="user-words">
            <transition-group name="wordIn">
                <span class="user-word" 
                    v-for="(letter,i) in enteredWords"
                    :key="i+letter">
                    {{letter}}
                </span>
            </transition-group>
        </div>
        <div class="scramble__word-keypard">
            <span class="scramble__letter" 
                v-for="(letter,i) in keypads"
                :key="i"
                @click="addLetter(letter)">
                {{letter}}
            </span>
        </div>
        <div class="btn">
            <button class="btn-outline" @click="checkAnswer">Check Answer</button>
            <button class="btn-outline" @click="clear"> Clear </button>
        </div>
    </div>
</template>

<script>
import {scramble} from '../helpers'
import scrambler from '../assets/scrambler.json'
export default {
    data() {
        return {
            enteredWords: [],
            word: '',
            correctWord: '',
            keypads: [],
        }
    },
    methods: {
        addLetter(letter) {
            this.enteredWords.push(letter)
        },
        clear() {
            this.enteredWords = []
        },
        checkAnswer() {
            return this.enteredWords.join('') === this.word.toLowerCase()
        },
        randomCharacter() {
            const random = Math.floor(Math.random() * scrambler.data.length)
            return scrambler.data[random]
        },
        reset() {
            const name = this.randomCharacter.name.replace(' ', '')
            this.correctWord = name
            this.word = scramble(name)
            this.keypads = this.word.split('')
            this.enteredWords = []
        },
    },
    mounted() {
        this.reset()
    },
}
</script>

<style scoped>
    .scramble {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 10rem auto;
        margin-top: 5rem;
    }
    .scramble__word {
        color: var(--color-secondary);
        font-size: 3rem;
    }
    .scramble__word-keypard {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 40%;
        justify-items: center;
        grid-gap: 1rem;
        margin-bottom: 2rem;
    }
    .scramble__letter {
        padding: 2rem;
        text-transform: uppercase;
        border: 2px solid var(--color-tertiary);
        background-color: transparent; 
        color: white;
        font-size: 1.7rem;
        cursor: pointer;
    }
    .scramble__letter:hover {
        background-color: var(--color-tertiary);
    }
    .user-words {
        display: flex;
        justify-content: center;
        margin: 5rem;
    }
    .user-word, .scramble__instruction {
        font-size: 1.7rem;
        color: white;
        padding: 1rem;
    }
    .scramble__instruction  {
        margin-bottom: 2rem;
    }
    .wordIn-enter-active, .wordIn-leave-active {
        transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);;
    }
    .wordIn-enter, .wordIn-leave-to {
        opacity: 0;
        transform: translateX(6rem);
    }
    .btn-outline:first-child {
        margin-right: 1rem;
    }
</style>