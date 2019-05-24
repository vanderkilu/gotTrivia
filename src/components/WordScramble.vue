<template>
    <div class="word">
        <p class="word__text"> Walder Frey </p>
    </div>
</template>


<style scoped>
    .word {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        min-width: 30rem;
    }
    .word__text {
        font-size: 1.5rem;
        background-color: var(--color-tertiary);
        color: white;
    }
</style>