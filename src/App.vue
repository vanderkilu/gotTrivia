<template>
  <div>
      <app-navigation></app-navigation>
      <router-view></router-view>
  </div>
</template>


<script>
import QuizCard from './components/QuizCard.vue'
import Navigation from './components/Navigation.vue'
export default {
  components: {
    appQuiz: QuizCard,
    appNavigation: Navigation
  }
}
</script>

<style>
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
  @media only screen and (max-width: 900px) {
    .wrapper-main {
      width: 80%;
      overflow: hidden;
    }
  }
</style>