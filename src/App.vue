<template>
  <div>
      <app-navigation></app-navigation>
      <transition :name="transitionName">
           <router-view></router-view>
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
    watch: {
        '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    },
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
  .btn-cta {
     text-decoration: none;
     padding: 2rem 4rem;
     border-radius: 6rem;
     box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
     background-color: #307878;
     color: white;
     font-size: 1.4rem;
     transition: all 0.5s;
 }
 .btn-cta:focus {
     outline: none;
 }
 .btn-cta:hover {
     box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.01);
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