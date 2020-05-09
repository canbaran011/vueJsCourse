<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>  {{message | toUppercase | toLowercase }}  </p>
        <input type="text" v-model="searchText"> <hr>
        <button @click="products.push(searchText)" class="btn btn-primary" >Ekle</button>
        <ul>
          <li :key="product" v-for="product in filtered ">  {{product }}  </li>
        </ul>
        <app-list>]</app-list>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from './FilterList'
import {productMixin} from './productMixin'

export default {
  mixins : [productMixin ]
  ,
  components : {
    appList : FilterList
  },
data() {
  return{
    message : "Selamlar Aradaslar ... || Nasilsiniz ?",
    searchText : ""
 }
},
filters : {
  toUppercase(value){
    return value.toUpperCase();
  }
},
created() {
  console.log("app vue created")
    // eger productmixin icindeki global array i degistimek istiyorsak created icinde 
    //productmixin nokta ile erisebiliriz.

},
}
</script>

<style>

</style>
// filter verinin kednisini degil kullanicinin gordugunu degistirir..