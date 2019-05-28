<template>
    <div class="scramble">
        <p class="time"> {{ time }} </p>
        <div class="sramble__score">
            <span class="stat stat-correct">{{correctCount}}</span>
        </div>
        <p class="scramble__instruction"> Quess the name of the character below </p>
        <p class="scramble__hint"> Hint: I am of the house {{house}}</p>
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
            <button class="btn-outline" @click="reset"> Another Character </button>
        </div>
        <transition name="fade" mode="out-in">
            <div class="message" v-show="show">
                <h3 v-if="isCorrect()" class="correct">Correct</h3>
                <h3 v-else class="wrong">Wrong</h3>
            </div>
        </transition>
        
    </div>
</template>

<script>
import {scramble, Timer} from '../helpers'
import scrambler from '../assets/scrambler.json'
export default {
    data() {
        return {
            enteredWords: [],
            word: '',
            correctWord: '',
            keypads: [],
            house: '',
            characters: scrambler,
            correctCount: 0,
            show: false,
            time: ''
        }
    },
    methods: {
        addLetter(letter) {
            this.enteredWords.push(letter)
        },
        clear() {
            this.enteredWords = []
        },
        isCorrect() {
            return this.enteredWords.join('')
                    .toLowerCase() === this.correctWord
        },
        /**
         * set timer and automatically route
         * when the time is up
         */
        startTime(duration) {
            let timer = duration, minutes, seconds;
            const time = setInterval(()=> {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                this.time = minutes + ":" + seconds;
                if (--timer < 0) {
                    clearInterval(time)
                    return this.$router.push({name: 'weldone', 
                    params: {score: {correct: this.correctCount, 
                    total: this.characters.length}}})
                }
            }, 1000)
            return  () => clearInterval(time)

        },
        checkAnswer() {
            if (this.isCorrect()) {
                this.correctCount++
            }
            this.show = true
            setTimeout(()=> {
                this.reset()
            }, 1000)
        },
        randomCharacter() {
            const random = Math.floor(Math.random() * this.characters.length)
            return this.characters[random]
        },
        reset() {  
            const name = this.randomCharacter().name
            this.house = name.split(' ')[1] || name.split(' ')[0]
            this.correctWord = name.replace(' ', '').toLowerCase()
            this.word = scramble(name.replace(' ', '')).toUpperCase()
            this.keypads = [...new Set(this.word.split(''))]
            this.enteredWords = []
            this.show = false
        }
    },
    mounted() {
        this.reset()
        this.unsetTimer = this.startTime(60*0.5)
    },
    beforeDestroy() {
        //clear the timer before component destroy
        this.unsetTimer() 
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
        margin-top: 2rem;
    }
    .time {
        color: white;
        font-size: 1.7rem;
    }
    .scramble__word {
        color: var(--color-secondary);
        font-size: 3rem;
    }
    .scramble__word-keypard {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
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
    .scramble__hint {
        font-size: 1.4rem;
        color: #e0e0e0;
        margin-bottom: 1rem;
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
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-outline {
        margin-right: 1rem;
    }
    .stat {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        margin: 1rem;
        background-color: #e8f5e9;
        color: #1b5e20;
        font-size: 1.5rem;
    }
    .message {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30%;
        z-index: 2;
    }
    .correct, .wrong {
        text-align: center;
        color: white;
        font-size: 2rem;
    }
    .wrong {
        color: #e57373;
    }
    .correct {
        color: #a5d6a7;
    }
</style>