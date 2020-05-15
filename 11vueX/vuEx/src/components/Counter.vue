<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter(3)">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr />
    <button class="btn btn-success" @click="increment(4)">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incAsync({time:1100})">+ asyncArttır</button>
    <button class="btn btn-danger" @click="decAsync">- asyncAzalt</button>
    
  </div>
</template>

<script>
import { mapMutations , mapActions } from "vuex";

export default {
  methods: {
    ...mapMutations(
      ["increaseCounter",
       "decreaseCounter"]),

    ...mapActions([
       "increment",
       "decrement",
       "incAsync",
       "decAsync",

]),
   
       /***************************************************************************** */
    // increment() {
    //   this.$store.dispatch("increment");
    // },
    // decrement() {
    //   this.$store.dispatch("decrement");
    // },
    
    // incrementAsync() {
    //   this.$store.dispatch("incAsync");
    // },
    // decrementAsync() {
    //   this.$store.dispatch("decAsync");
    // }
    /*********************************************************************************** */
    //     incrementCounter(){
    //       // this.$emit("counterEvent", 1);
    //       // this.$store.state.counter++;
    //       this.$store.commit("increaseCounter"); // , 1 yaninda value degeri yollanabilir

    //     },
    //     decrementCounter(){
    //       // this.$emit("counterEvent", -1);
    //       // this.$store.state.counter--;
    //       this.$store.commit("decreaseCounter");
    // }
  },
};
</script>

<style></style>
