<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
        <button @click="show = !show" class="btn btn-primary" >Goster / Gizle</button> 
        <br> <br>
         <transition> <!--transition bir element uzerinde kullanilabilir or trs group-->
        <div v-if="show" class="alert alert-success">
          Succes Kutusu
        </div>
        </transition>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    show : false
  }
}
}
</script>

<style>
</style>
