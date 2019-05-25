<template>
    <div class="word-container">
        <div class="word-list">
            <app-word-scramble 
                v-for="word in words"
                :key="word"
                :word="word"
            >
            </app-word-scramble>
        </div>
        <form  class="word-form">
            <input type="text" class="input" placeholder="enter character name">
        </form>
    </div>
</template>


<script>
import WordScramble from './WordScramble'
export default {
    data() {
        return {
            words: ["just trying out", "call", "maybe"]
        }
    },
    components: {
        appWordScramble: WordScramble
    }
}
</script>


<style scoped>
    .word-container{
        width: 60%;
        margin: 5rem auto;
        min-height: 100%;
        display: grid;
        grid-template-rows: 1fr 20rem;
        grid-template-columns: 100%;
       
    }
    .word-list  {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
    }
    .word-form {
        width: 100%;
    }
    .input {
        width: 100%;
        padding: 1.5rem 2rem;
        border: none;
        border: 1px solid #bdbdbd;
    }
</style>