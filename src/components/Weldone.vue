<template>
    <div class="container">
        <div class="card">
            <p class="done-message">Hey <i class="emoji">👋</i> awesome player,you have completed the quiz </p>
            <p class="done-message__small">you got <i class="score"> {{score.correct || 0}} / {{score.total || 0}} </i> right answers</p>
        </div>
        <router-link :to="{name: 'games'}" class="btn-outline">back to quiz<i class="arrow-right">&larr;</i></router-link>
    </div>
</template>

<script>
export default {
    props: ['score'],
}
</script>

<style scoped>
    .container {
        width: 60%;
        margin: auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .card {
        cursor: none;
        text-align: center;
    }
    .emoji {
        color: red;
    }
    .done-message {
        font-size: 1.7rem;
        margin-bottom: 1rem;
    }
    .done-message__small {
        font-size: 1.4rem;
    }
    .score {
        display: inline-block;
        color: #1b5e20;
        padding: 0.1rem 1rem;
        background-color: #e8f5e9;
        border-radius: 1rem;
    }
    @media only screen and (max-width: 900px) { 
        .container {
            width: 80%;
        }
        .card {
            min-height: 30rem;
        }
        .done-message {
            line-height: 1.5;
        }
    }
</style>