<template>
    <div class="loader-container">
        <div class="loader" v-if="isLoading"></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'isLoading'
        ])
    }
}
</script>
<style scoped>
.loader {
  border: 10px solid transparent; 
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: spin 1s linear infinite;
  

}
.loader-container {
  position: fixed;
  z-index: 10;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>