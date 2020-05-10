<template>
    <div>
        <div class="card">
          <img :src="card.image" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    props : ["card"]

}
</script>
<style scoped>
    
.card {
  width: 200px;
  height: 232px;
  border-radius: 15px;
  border: 2px solid purple;
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