<template>
    <div class="container">
        <div class="card">
            <p class="done-message">Hey awesome player,<i class="emoji">👋</i> have completed the quiz </p>
            <p class="done-message__small">you got  right answers<i class="emoji">🙂</i></p>
        </div>
        <router-link :to="{name: 'quiz'}" class="btn-cta">back to quiz <i class="arrow-right">&larr;</i></router-link>
    </div>
</template>


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
        color: #e65100;
        margin: 0 1rem
    }
    .done-message {
        font-size: 1.7rem;
        margin-bottom: 1rem;
    }
    .done-message__small {
        font-size: 1.4rem;
    }
    @media only screen and (max-width: 900px) { 
        .container {
            width: 80%;
        }
        .card {
            min-height: 30rem;
        }
    }
</style>