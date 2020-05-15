<template>
  <div>
    <!-- <p class="counter-container">Sayaç : {{ counter }}</p> -->
    <!-- <p class="counter-container">Sayaç : {{ getDoubleCounter }}</p> -->
    <p class="counter-container">Sayaç : {{ double }}</p>
    <p class="counter-container">{{ stringC }}</p>
    <input  type="text" v-model="value" > <!-- @input="setValue" :value="value"-->
    <hr>
    <p>  {{value}} </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  // props : ["counter"]

computed: {
  ...mapGetters({
    double : "getDoubleCounter",
    stringC : "stringCounter"
  }),
  value:{
    get(){
          return this.$store.getters.getValue;
    },
    set(value){
          this.$store.dispatch("setValueData", value);

    }
    // return this.$store.getters.getValue;
  }
},



};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>

// { // counter() { // // return this.$store.state.counter * 2; // return
this.$store.getters.getDoubleCounter; // }, // stringCounter() { // return
this.$store.getters.stringCounter; // } // },
