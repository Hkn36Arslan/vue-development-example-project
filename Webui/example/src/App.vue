<template>
  <div id="app">
    <productListVue/>
  </div>
</template>
<script>
import productListVue from './components/productList.vue';


export default {

  name: 'App',
  components: {
    productListVue,

  },
  setup() {
  

    return {
    
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
