<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  name:"productItem View",

  props:{
   name:{
    type:String,
    default:"",
   }
  },
  setup(){
   
    const title = ref("Product Item");
    return{
      title,
    };
  },
}
</script>

<style>

</style>