<template>
    <div class="word">
        <p class="word__text"> {{word}} </p>
    </div>
</template>

<script>
export default {
    props: ['word']
}
</script>

<style scoped>
    .word {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 30rem;
       
    }
    .word__text {
        font-size: 1.5rem;
        background-color: var(--color-tertiary);
        padding: 2rem;
        color: white;
    }
</style>