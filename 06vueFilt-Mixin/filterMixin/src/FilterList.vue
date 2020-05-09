<template>
  <div>
    <input type="text" v-model="searchText" />
    <hr />
    <ul>
      <li :key="product" v-for="product in filtered">{{ product }}</li>
    </ul>
  </div>
</template>

<script>
import {productMixin} from './productMixin'
export default {

mixins :[productMixin],
created() {
  console.log("filter List created")
},

};
</script>

<style></style>
// filter verinin kednisini degil kullanicinin gordugunu degistirir..
