<template>
    <div class="option">
        <img src="../assets/lion.svg" alt="dragon" v-if="index === 0">
        <img src="../assets/dragon.svg" alt="dragon" v-if="index === 1">
        <img src="../assets/wolf.svg" alt="dragon" v-if="index === 2">
        <img src="../assets/flower.svg" alt="dragon" v-if="index === 3">
        <p class="option__text"> {{ option }}</p>
    </div>
</template>

<script>
export default {
    props: ['option','index']
}
</script>

<style scoped>
    .option {
        padding: 4rem;
        height: 8rem;
        border-radius: 3px;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #304860;
        transition: all 0.5s;
        position: relative;
    }
    .option:hover {
        cursor: pointer;
        background-color: whitesmoke;
    }
    .option:hover .option__text {
        color: #307878;
    }
    .option__text {
        font-size: 1.3rem;
        color: ghostwhite;
        transition: all 0.3;
    }
    img {
        position: absolute;
        height: 3rem;
        width: 3rem;
        top: 1rem;
        left: 1rem;
    }
    @media only screen and (max-width: 900px) {
        .option {
            min-height: 4rem;
        }
    }
</style>