<template>
    <div class="option" @click="checkAnswer" :class="classes">
        <img src="../assets/lion.svg" alt="dragon" v-if="index === 0">
        <img src="../assets/dragon.svg" alt="dragon" v-if="index === 1">
        <img src="../assets/wolf.svg" alt="dragon" v-if="index === 2">
        <img src="../assets/flower.svg" alt="dragon" v-if="index === 3">
        <p class="option__text"> {{ option }}</p>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    props: ['option','index','correct'],
    data() {
        return {
            classes: []
        }
    },
    methods: {
        checkAnswer() {
            if (this.correct.toLowerCase() === this.option.toLowerCase()) {
               this.classes.push('correct')
               eventBus.$emit('INCREASE_CORRECT_SCORE', 1)
            }
            else {
                this.classes.push('wrong')
                eventBus.$emit('INCREASE_WRONG_SCORE', 1)
            }
            eventBus.$emit('VISITED', true)
            setTimeout(()=> this.classes = [], 2000)
        }
    },
}
</script>

<style scoped>
    .option {
        padding: 4rem;
        height: 8rem;
        border-radius: 3px;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #304860;
        transition: all 0.5s;
        position: relative;
    }
    .option:hover {
        cursor: pointer;
        background-color: whitesmoke;
    }
    .option:hover .option__text {
        color: #307878;
    }
    .option__text {
        font-size: 1.3rem;
        color: ghostwhite;
        transition: all 0.3;
    }
    img {
        position: absolute;
        height: 3rem;
        width: 3rem;
        top: 1rem;
        left: 1rem;
    }
    .wrong {
        animation-name: shake;
        animation-direction: forwards;
        animation-duration: 1s;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
    .correct {
        animation-name: colorChange;
        animation-direction: forwards;
        animation-duration: 1s;
    }
    @keyframes colorChange {
        10% {
            background-color: #e8f5e9;
        }
        50%,70% {
            background-color: #c8e6c9;
        }
        100%  {
            background-color: #a5d6a7;
        }
    }
    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
            background-color: #ef9a9a;
            color: #b71c1c;
        }
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }

    @media only screen and (max-width: 900px) {
        .option {
            min-height: 4rem;
        }
    }
</style>