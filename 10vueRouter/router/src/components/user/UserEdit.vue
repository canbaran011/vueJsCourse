<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      Ad : {{ $route.query.name }}
    </p>
    <p>
      Soyad : {{ $route.query.lastName }}
    </p>
    <button class="btn btn-primary" @click="saved = true"  >Approve</button>
    <div style="height:700px"></div>
    <p id="data">Bazi bilgiler buraya gelebilir</p>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        saved: false
      }
    },
    beforeRouteLeave (to, from, next) {
      if(this.saved){
        next();
      }else{
        if(confirm("Are you sure you want to exit ?")){
          next();
        }else{
          next(false)
        }
      }

    }
      
  }
</script>
