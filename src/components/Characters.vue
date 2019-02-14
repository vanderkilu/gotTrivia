<template>
    <div class="container">
        <app-search></app-search>
        <div class="card-container">
            <div class="card">
                <p class="name">Jon Snow</p>
                <p class="house">Stark</p>
            </div>
             <div class="card">
                <p class="name">Tommund </p>
                <p class="house">Wildings</p>
            </div>
            <div class="card">
                <p class="name">Lady Margarine</p>
                <p class="house">Tyrel</p>
             </div>
             <div class="card">
                <p class="name">Cersei Lannister</p>
                <p class="house">Lannister</p>
             </div>
        </div>
    </div>
</template>



<script>
import Search from './Search.vue'
export default {
    components: {
        appSearch: Search
    }
}
</script>
<style scoped>
    .container {
        width: 60%;
        margin: 5rem auto;
        
    }
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 3rem;
    }
    .card {
        padding: 4rem;
        height: 8rem;
        border-radius: 3px;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #304860;
        transition: all 0.5s;
        color: white;
    }
    .name {
        font-size: 1.5rem;
        color: white;
        margin-bottom: 2rem;
    }
    .house {
        font-size: 1.2rem;
        color: #1b5e20;
        padding: 0.5rem 1.5rem;
        background-color: #e8f5e9;
        border-radius: 4rem;
    }
</style>