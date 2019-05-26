<template>
  <div>
      <app-navigation></app-navigation>
      <transition name="fade">
           <router-view :key="$route.path"></router-view>
      </transition>
  </div>
</template>


<script>
import QuizCard from './components/QuizCard.vue'
import Navigation from './components/Navigation.vue'
export default {
    data() {
        return {
             transitionName: 'slide-right',
        }
    },
    components: {
        appQuiz: QuizCard,
        appNavigation: Navigation
    }
}
</script>

<style>

:root {
    --color-primary: #307878;
    --color-secondary: #ffffff;
    --color-tertiary: #304860;
    --color-decor: #5CDB95;
    --bg-color:#183048;
}
 *,*::before, *::after {
   padding: 0;
   margin: 0;
 }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-family:'Montserrat', sans-serif;
    background-color:#183048;
    background-color: var(--bg-color);
  }
  .btn-outline {
        padding: 1.5rem 2rem;
        background-color: transparent;
        border: 2px solid var(--color-tertiary);
        border-radius: 3px;
        color: var(--color-secondary);
        font-size: 1.5rem;
        cursor: pointer;
  }
    .btn-outline:focus {
        outline: none;
    }
    .btn-outline:hover {
        background-color: var(--color-tertiary);
    }
  .wrapper-main {
    width: 60%;
    margin: 5rem auto;
  }
  .control:hover {
        cursor: pointer;
    }
    .control-left {
        top: 50%;
        left: -20rem;
    }
    .left-arrow, .right-arrow {
        transition: all 0.5s;
    }
    .control-left:hover .left-arrow {
        transform: translateX(-1rem);
    }
    .control-right:hover .right-arrow {
        transform: translateX(1rem);
    }
    .control-right {
        top: 50%;
        right: -20rem;
    }
  .slide-right-enter-active, .slide-right-leave-active {
        transition: all 0.5s;
    }
    .slide-left-enter-active, .slide-left-leave-active {
        transition: all 0.5s;
    }
    .slide-right-enter, .slide-right-leave-to {
        opacity: 0;
        transform: translateX(-12rem);
    }
    .slide-left-enter, .slide-left-leave-to {
        opacity: 0;
        transform: translateX(12rem);
    }
    .slide-right-leave-active, .slide-left-leave-active {
        position: absolute;
    }
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 3rem;
    }
    .fade-enter-active, .fade-leave-to {
        transition: all 0.5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .card {
        padding: 4rem;
        height: 8rem;
        border-radius: 3px;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #304860;
        transition: all 0.5s;
        text-align: center;
        color: white;
        cursor: pointer;
    }
  @media only screen and (max-width: 900px) {
    .wrapper-main {
      width: 80%;
      overflow: hidden;
    }
  }
</style>