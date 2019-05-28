<template>
    <div class="trivia">
        <h3 class="trivia__heading">Select a game to play</h3>
        <div class="trivia__games">
            <router-link class="card" :to="{name: 'quiz'}">
                <p class="card__text"> Triva </p>
            </router-link>
            <router-link class="card" :to="{name: 'scramble'}">
                <p class="card__text"> Character Scramble </p>
            </router-link>
        </div>
    </div>
</template>


<style scoped>
    .trivia {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20rem auto;
        width: 50%;
    }
    .trivia__heading {
        font-size: 2rem;
        color: var(--color-secondary);
        margin-bottom: 5rem;
    }
    .trivia__games {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 2rem;
    }
    .card {
        background-color: transparent;
        border: 2px solid var(--color-tertiary);
    }
    .card:hover {
        background-color: var(--color-tertiary);
    }
    .card__text {
        font-size: 1.7rem;
        color: var(--color-secondary);
    }
</style>