<template>
  <div class="wrapper-main">
    <app-navigation></app-navigation>
    <app-quiz></app-quiz>
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
    background-color: #183048;
    font-family:'Montserrat', sans-serif;
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