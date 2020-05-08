<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br> <br>
        <button @click="selectedComponent='appMemory' " class="btn btn-sm btn-primary">appMemory</button>
        <button @click="selectedComponent='appNewMemory' " class="btn btn-sm btn-primary">appNewMemory</button>
        <button @click="selectedComponent='appAuthor' " class="btn btn-sm btn-primary">appAuthor</button>
          <p>selected: {{selectedComponent}} </p>
          <br> <hr>
        <keep-alive>
        <component :is="selectedComponent">
            <h3 slot="heading">Bir ani</h3> 
          <p>baslik alti bir anidir;</p>    
        </component>
        </keep-alive>
        <!-- keep alive kullaninca destroyed lifecycle hook gittiginden activated ve deactvated -->
        <!-- <app-memory content="Cok guzel bir ani" >
          <h3 slot="heading">Bir ani</h3> 
          <p>baslik alti bir anidir;</p>    
        </app-memory> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from './components/Memory';
  import NewMemory from './components/NewMemory';
  import Author from './components/Author';

export default {
  data : function() {
    return {
      selectedComponent : "appMemory"
    }
  },
components :{
  appMemory : Memory,
  appNewMemory : NewMemory,
  appAuthor : Author
}

}
</script>

<style scoped>


</style>
