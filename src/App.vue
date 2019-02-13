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
  @media only screen and (max-width: 900px) {
    .wrapper-main {
      width: 80%;
      overflow: hidden;
    }
  }
</style>