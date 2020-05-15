<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <router-view></router-view>
    <hr>
    <button @click="navigateToHome" class="btn btn-success">Home Controller</button> <hr>
  </div>
</template>
<script>
  export default {
data(){
return{
  id : this.$route.params.id
}
},
methods: {
      navigateToHome(){
        // alert();
        // this.$router.push("/")
        // this.$router.push( {path : '/'} )
        this.$router.push( {  name : 'anasayfa'} )
            
}
    },
    watch: {
      "$route"(to ,from){
         this.id = to.params.id 
      }
    },
  }
</script>
