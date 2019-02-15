<template>
    <div class="flexbox">
        <div class="search">
            <div>
                <input type="text" :placeholder="'search ' + name + ' by name'" required 
                @keyup="search"
                @change="search"
                v-model="query">
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['name'],
  data() {
    return {
      query: ''
    }
  },
  methods: {
   ...mapActions([
     'filterBySearch'
    ]),

    search() {
      this.filterBySearch({name: this.name, query:this.query})
    }
  }
}
</script>

<style scoped>
.flexbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
}
.search {
  margin: 20px;
}

.search > div {
  display: inline-block;
  position: relative;
}

.search > div:after {
  content: "";
  background: white;
  width: 4px;
  height: 20px;
  position: absolute;
  top: 40px;
  right: 2px;
  transform: rotate(135deg);
  box-shadow: 1px 0 #0091c2;
}

.search > div > input {
  color: white;
  font-size: 16px;
  background: transparent;
  width: 25px;
  height: 25px;
  padding: 10px;
  border: solid 3px white;
  outline: none;
  border-radius: 35px;
  box-shadow: 0 1px #0091c2;
  transition: width 0.5s;
}

.search > div > input::placeholder {
  color: #efefef;
  opacity: 1;
}

.search > div > input::-ms-placeholder {
  color: #efefef;
}

.search > div > input::-ms-input-placeholder {
  color: #efefef;
}

.search > div > input:focus,
.search > div > input:valid {
  width: 250px;
}

</style>