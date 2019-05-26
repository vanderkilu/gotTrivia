import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import QuizCard from './components/QuizCard.vue'
import Characters from './components/Characters.vue'
import Character from './components/Character.vue'
import Houses from './components/Houses.vue'
import House from './components/House.vue'
import Weldone from './components/Weldone.vue'
import WordScramble from './components/WordScramble'
Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        }, 
        {
            path: '/quiz',
            name: 'quiz',
            component: QuizCard
        },
        {
            path: '/quiz/scramble',
            name: 'scramble',
            component: WordScramble
        },
        {
            path: '/characters',
            name: 'characters',
            component: Characters
        },
        {
            path: '/character/:id',
            name: 'character',
            component: Character
        },
        {
            path: '/houses',
            name: 'houses',
            component: Houses
        },
        {
            path: '/house/:id',
            name: 'house',
            component: House
        },
        {
            path: '/weldone',
            name: 'weldone',
            component: Weldone
        },
        { path: '/*', redirect: { name: 'home' }}
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})