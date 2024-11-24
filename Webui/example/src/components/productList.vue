<template>
  <div>
    <h1>{{ title }}</h1><br><button @click="addProduct">Add New Product</button><br><br>
    <form v-if="formVisible" action="">
      <label for="">Product Name</label><br>
      <input type="text" v-model="name"><br><br>
      <label for="">Product Description</label><br>
      <input type="text" v-model="description"><br><br>
      <label for="">Product Price</label><br>
      <input type="number" v-model="price"><br><br>
      <button type="submit">Submit</button>
    </form>
    <h1>{{ name }}</h1>
    <productItemVue :name="name"/>
  </div>
</template>

<script>
import {ref} from "vue";
import productItemVue from './productItem.vue';
export default {
   name:"productList View",
   
   components:{
     productItemVue,
   },
   setup(){
   const title = ref("Product List");
   const formVisible = ref(false);
   const name = ref("");


   const addProduct = () =>{
     formVisible.value = !formVisible.value;
   };
    
   console.log("Name:",name.value);
   

    return{
      title,formVisible,addProduct,name
    };
   },
}
</script>

<style>

</style>