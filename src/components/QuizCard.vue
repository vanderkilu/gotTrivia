<template>
    <div class="wrapper wrapper-main">
        <div class="stat-wrapper">
            <i class="icon-times">&times;</i>
             <span class="stat stat-wrong">{{wrongCount}}</span>
            <span class="stat stat-correct">{{correctCount}}</span>
            <i class="icon-check">&#10003;</i>
        </div>
        <transition-group :name="transitionName">
            <div v-for="(question,i) in questions" :key="question.id" v-show="count === i">
                <app-question  :question="question"></app-question>
                <div class="wrapper-option">
                    <app-option v-for="(option,i) in question.options" :key="option" 
                    :index="i" :option="option" :correct="question.correct"></app-option>
                </div>
            </div>
        </transition-group>
        <span class="control control-left" @click="prev" v-if="count > 0"> <i class="left-arrow"> &lt;</i> </span>
        <span class="control control-right" @click="next"><i class="right-arrow"> &gt;</i></span>
    </div>
</template>


<script>
import Question from './Question.vue'
import Option from './Option.vue'
import {eventBus} from '../main.js'
import json from '../assets/quiz.json'
export default {
    data() {
        return {
            questions: [],
            count: 0,
            transitionName: 'slide-right',
            correctCount: 0,
            wrongCount: 0,
            walkHistory: [],
            json: json
        }
    },
    components: {
        appQuestion: Question,
        appOption: Option
    },
    watch: {
        count(newValue, oldValue) {
            if (newValue  > oldValue) this.transitionName = 'slide-right'
            else this.transitionName = 'slide-left'
        }
    },
    methods: {
        walk(count) {
            if (this.walkHistory.includes(count)) {
                this.visited = true
            }
            else {
                this.walkHistory.push(count)
                this.visited = false;
            }
        },
        next() {
            if (this.count >= this.questions.length-1){
                this.$router.push({name: 'weldone', params: {score: {correct: this.correctCount, total: this.questions.length}}})
                this.count = this.questions.length-1
            } 
            else {
                this.count++ 
            }
            this.walk(this.count)
            
        },
        prev() {
            this.walk(this.count)
            if (this.count <= 0) this.count = 0
            else this.count--
        }
    },
    mounted() {
        this.questions = this.json.data
        this.questions = this.questions.filter((question) => question !== null)
        eventBus.$on('INCREASE_CORRECT_SCORE', (count)=> {
            if (!this.visited) {
                this.correctCount += count
            }
        })
        eventBus.$on('INCREASE_WRONG_SCORE', (count)=> {
            if (!this.visited) { 
                this.wrongCount += count
            }
        })
        eventBus.$on('VISITED', (bool)=> this.visited = bool)
    },
}
</script>

<style scoped>
    .wrapper {
        position: relative;
    }
    .wrapper-option {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 2rem;
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
    .stat {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        margin: 1rem;
        background-color: white;
        color: #307878;
        font-size: 1.5rem;
    }
    .icon-check {
        color: green;
        font-size: 1.7rem;
    }
    .icon-times {
        color: red;
        font-size: 1.7rem;
    }
    .stat-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 5rem;
    }
    .stat-wrong {
        background-color: #ffebee;
        color: #e57373;
    }
    .stat-correct {
        background-color: #e8f5e9;
        color: #1b5e20;
    }
    @media only screen and (max-width: 900px) {
        .control-right {
            top: 30%;
            right: 5rem;
        }
        .control-left {
            top: 30%;
            left: 5rem;
        }
    }
</style>