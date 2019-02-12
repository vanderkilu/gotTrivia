<template>
    <div class="question">
        <h3 class="question__text">{{question.question}}</h3>
         <p class="option_info"></p>
    </div>
</template>

<script>
export default {
    props: ['question']
}
</script>

<style scoped>
.question__text {
    font-size: 2rem;
    font-weight: 200;
    color: ghostwhite;
    text-align: center;
    margin-bottom: 8rem;
}

.question__text::after {
    content: "";
    display: block;
    height: 6px;
    width: 5rem;
    margin: 2rem auto;
    background-color: #307878;
}
    @media only screen and (max-width: 900px) {
        .question__text {
            font-size: 1.7rem;
            font-weight: 400;
        }
    }
</style>