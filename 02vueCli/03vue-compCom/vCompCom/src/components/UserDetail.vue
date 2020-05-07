<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanici Adi : {{ name }} </p>
    <p> Tersten Adi : {{switchName()}} </p>
    <p> Yasi : {{age}} </p>
    <button @click="SendToParent">  Veriyi Parent a  yolla</button>
  </div>
</template>
<script>
import {eventBus} from '../main';

export default {

  props : { //validate
    name : {
      type:String, // array , object vs vs
      required : true, 
      default : "default Veri" // user.vue den bir sey gelmese dahi bunu gelmis bir sey gibi sayar.
    },
    age : String
  }, 
  methods : {
    switchName(){
      return this.name.split("").reverse().join("");
    },
    SendToParent(){
      this.$emit("data" , "From child to Parent");
    }
  },
  created(){
    eventBus.$on("ageWasEdited", (age) => {
      this.age = age
    })
  }


  // props : ["name"]
  // data : function(){
  //   return{
  //     this.name = name
  //   }
  // }
} 

</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
