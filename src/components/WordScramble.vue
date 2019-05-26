<template>
    <div class="scramble">
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
            <button class="btn-outline">Check Answer</button>
            <button class="btn-outline"> Clear </button>
        </div>
    </div>
</template>

<script>
import {scramble} from '../helpers'
export default {
    data() {
        return {
            enteredWords: [],
            word: 'PETRBAELISH',
            keypads: []
        }
    },
    mounted() {
        this.word = scramble(this.word)
        this.keypads = this.word.split('')
    },
    methods: {
        addLetter(letter) {
            this.enteredWords.push(letter)
        }
    }
}
</script>

<style scoped>
    .scramble {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 10rem auto;
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
    .user-word {
        font-size: 1.7rem;
        color: white;
        padding: 1rem;
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