<template>
    <div class="wrapper">
        <div class="wrapper-left">
            <h3 class="heading"> A Trivia of Ice and Fire</h3>
            <p class="text"> How well do you know your game of thrones trivia? 
                Can you achieve the iron throne or are you destined to 
                join the night watch along the wall?
            </p>
            <router-link :to={} class="btn-cta">play the trivia <i class="arrow-right">&rarr;</i></router-link>
        </div>
        <div class="wrapper-right">
            <p class="timer"> 
                <span class="timer__element">{{countdown.days}} <i class="sub">days</i> </span>
                <span class="timer__element">{{countdown.hours}} <i class="sub">hours</i> </span>
                <span class="timer__element">{{countdown.minutes}} <i class="sub">minutes</i> </span>
                <span class="timer__element">{{countdown.seconds}} <i class="sub">seconds</i> </span>
            </p>
            <p class="timer-text"> To Season Finale </p>
        </div>
        <img src="../assets/darrow.svg" class="arrow-down">
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdown: {
                days: null,
                hours: null,
                minutes: null,
                seconds: null,
                message: ''
            }
        }
    },

    methods: {
        beginCountDown(toDate) {
            const timer = setInterval(()=> {
                const now = new Date().getTime()
                const distance = toDate - now
                this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24))
                this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000)

                if (distance < 0) {
                    clearInterval(timer)
                    countdown.message = "THE FINAL SEASON HAS STARTED"
                }

            }, 1000)
        }
    },
    mounted() {
        const date = new Date("Apr 14, 2019 18:30:00").getTime()
        this.beginCountDown(date)
    }
}
</script>
 
 <style scoped>

 .wrapper {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     padding: 4rem;
     height: 90vh;
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
     background-image: url('../assets/back.jpg');
 }
 .timer-text {
     text-align: center;
     font-size: 1.8rem;
     margin-top: 2rem;
     color: white;
 }
 .wrapper-left {
     margin-top: 15rem;
     padding-left: 2rem;
 }
 .wrapper-right {
     margin-top: 30rem;
     padding-right: 2rem;
 }
 .timer {
     display: flex;
     justify-content: center;
     color: white;
 }
 .timer__element {
     margin-left: 2rem;
    font-size: 2.5rem;
    font-weight: 700;

 }
 .sub {
     color: #eeeeee;
     font-size: 1.2rem;
     font-weight: 200;
 }
 .heading {
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
 .btn-cta {
     text-decoration: none;
     padding: 2rem 4rem;
     border-radius: 6rem;
     box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
     background-color: #307878;
     color: white;
     font-size: 1.4rem;
 }
 .btn-cta:focus {
     outline: none;
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
.arrow-down:hover {
     transform: translateY(1rem);
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