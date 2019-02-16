<template>
    <div class="container">
        <div class="card">
            <p class="done-message">Hey awesome player,<i class="emoji">👋</i> have completed the quiz </p>
            <p class="done-message__small">you got {{$route.params.score.correct}} / {{$route.params.score.total}} right answers<i class="emoji">🙂</i></p>
        </div>
    </div>
</template>


<style scoped>
    .card {
        cursor: none;
        text-align: center;
    }
    .emoji {
        color: #307878;
    }
    .done-message {
        font-size: 1.7rem;
    }
    .done-message__small {
        font-size: 1.4rem;
    }
</style>