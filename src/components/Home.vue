<template>
    <div class="container">
        <div class="wrapper">
            <div class="wrapper-left">
                <h3 class="heading"> A Trivia of Ice and Fire</h3>
                <p class="text"> How well do you know your game of thrones trivia? 
                    Can you achieve the iron throne or are you destined to 
                    join the night watch along the wall?
                </p>
                <router-link :to="{name: 'games'}" class="btn-outline">play the trivia <i class="arrow-right">&rarr;</i></router-link>
            </div>
            <div class="wrapper-right">
               <h3 class=" text-bold ">Winter Is Here <span class="emoji"> ❄ ⚔️ 🐲 </span> </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>
 
 <style scoped>

 .wrapper {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     padding: 4rem;
     height: 88vh;
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
     background-image: url('../assets/back.jpg');
 }
 .text-bold {
     text-align: center;
     font-size: 3.5rem;
     margin-top: 2rem;
     color: white;
 }
 .wrapper-left {
     margin-top: 15rem;
     padding-left: 2rem;
 }
 .wrapper-right {
     padding: 2rem 6rem;
     display: flex;
     justify-content: center;
     align-items: center;
     justify-content: center;
     flex-direction: column;
 }
 .emoji {
     color: var(--color-secondary);
 }
 .sub {
     color: #eeeeee;
     font-size: 1.2rem;
     font-weight: 200;
 }
 .heading, .bold {
     font-weight: 600;
     font-size: 4rem;
     color: white;
     margin-bottom: 2rem;
 }
 .text {
     font-size: 1.9rem;
     color: #eeeeee;
     line-height: 1.5;
     margin-bottom: 6rem;
 }
 .arrow-right {
     color: white;
     font-size: 1.8rem;
     margin-left: 0.5rem;
     transition: all 0.3s;
 }    
.arrow-down {
    width: 2rem;
    height: 2rem;
    grid-column: 1 / 3;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.5s;
    padding: 1rem;
}
.bold {
    font-weight: 500;
}
a:link, a:visited {
    text-decoration: none;
}
.btn-outline {
    border: 3px solid var(--color-secondary);
}
@media only screen and (max-width: 900px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        grid-template-columns: none;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        height: 100vh;
        overflow: hidden;
     }
    .wrapper-left {
        margin-top: 10rem;
        padding: 2rem 4rem;
    }
    .wrapper-right {
        margin-top: 10rem;
        padding: 2rem 4rem;
    }
    .heading {
        font-weight: 600;
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
    }
    .text {
        font-size: 1.7rem;
        color: #eeeeee;
        line-height: 1.4;
        margin-bottom: 4rem;
    }
}
 </style>