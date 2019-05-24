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
        <form  class="form">
            <input type="text" class="input" placeholder="enter character name">
        </form>
    </div>
</template>


<script>
import WordScramble from './WordScramble'
export default {
    data() {
        return {
            words: ["just trying out"]
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       
    }
    .word-list  {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .form {
        width: 100%;
        bottom: 2rem;
        margin: 0 auto;
    }
    .input {
        width: 100%;
        padding: 1.5rem 2rem;
        border: none;
        border: 1px solid #bdbdbd;
    }
</style>