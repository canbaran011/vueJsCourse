<template>

        <div class="card">

        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
.card {
  width: 200px;
  height: 232px;
  margin-top: 10px;
  border-radius: 15px;
  border: 2px solid purple;
  background-image: url("../assets/vuebackground.jpg");
  background-size: cover ;
  background-repeat:no-repeat ;
  background-position: center;
}
.card:hover {
  box-shadow: 0px 5px 48px rgb(224, 31, 241);
  transition: box-shadow 0.45s;
}
.card img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>