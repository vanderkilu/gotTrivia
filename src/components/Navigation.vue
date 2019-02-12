<template>
    <div class="wrapper">
         <nav class="nav" v-if="isToggled">
            <router-link :to="{}" class="nav__link">Characters</router-link>
            <router-link :to="{}" class="nav__link">Houses</router-link>
            <router-link :to="{}" class="nav__link">Episodes</router-link>
            <router-link :to="{}" class="nav__link">Trivia</router-link>
        </nav>
        <div class="menu" @click="this.isToggled = !this.isToggled">
            <span class="menu__line"></span>
            <span class="menu__line"></span>
            <span class="menu__line"></span>
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            isToggled: false
        }
    }
}
</script>


<style scoped>
    .nav {
        position: fixed;
        width: 100vh;
        height: 100%;
        z-index: 10;
        background-color: #307878;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        top: 0;
        left: 0;
    }
    .nav__link {
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: 200;
        color: white;
    }
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0.5rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.03);
        background-color: white;
        position: fixed;
        top: 1rem;
        right: 2rem;
        z-index: 15;
    }
     .menu__line {
         display: block;
         width: 50%;
         height: 2px;
         background-color: #307878;
     }
     .menu__line:not(:last-child) {
         margin-bottom: 0.5rem;
     }
</style>