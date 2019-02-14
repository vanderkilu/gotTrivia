import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import QuizCard from './components/QuizCard.vue'
import Characters from './components/Characters.vue'

Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, 
        {
            path: '/quiz',
            name: 'quiz',
            component: QuizCard
        },
        {
            path: '/characters',
            name: 'characters',
            component: Characters
        }
    ] 
})