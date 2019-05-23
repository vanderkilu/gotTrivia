<template>
    <div class="wrapper">
        <div class="menu" @click="isToggled = !isToggled">
            <span class="menu__line"></span>
            <span class="menu__line"></span>
            <span class="menu__line"></span>
        </div>
        <transition name="navigation">
            <nav class="nav" v-if="isToggled" @click="isToggled = false">
                <router-link :to="{name: 'home'}" class="nav__link">Home</router-link>
                <router-link :to="{name: 'characters'}" class="nav__link">Characters</router-link>
                <router-link :to="{name: 'houses'}" class="nav__link">Houses</router-link>
                <router-link :to="{name: 'quiz'}" class="nav__link">Trivia</router-link>
            </nav>
        </transition>
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
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: var(--color-primary);
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
        color: #183048;
        text-decoration: none;
        padding: 1rem;
        background-color: transparent;
        position: relative;
    }
    .nav__link::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background-color: #e0f2f1;
        transition: all 0.5s;
    }
    .nav__link:hover:before {
        width: 100%;
        z-index: -1;
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
        cursor: pointer;
    }
    .menu:hover  .menu__line:not(:last-child){
        margin-bottom: 0.8rem;
    }
     .menu__line {
         display: block;
         width: 50%;
         height: 2px;
         background-color: var(--color-primary);
         transition: all 0.2s;
     }
     .menu__line:not(:last-child) {
         margin-bottom: 0.5rem;
     }
     .navigation-enter-active, .navigation-leave-active {
         transition: all 0.5s;
     }
     .navigation-enter, .navigation-leave-to {
         opacity: 0;
         transform: translateY(-10rem);
     }
</style>