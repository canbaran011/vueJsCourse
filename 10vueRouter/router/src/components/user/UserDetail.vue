<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>kullanicinin id bilgisi > {{$route.params.id}} </p>
    <p>
      Lorem ipsum dolor sit amet, 
    </p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="{ name :'userEdit' , params : {id : $route.params.id } , query: {name: 'can', lastName: 'baran' } } "
    > 
      Edit User
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>
    <!-- :to="'/user/'+ $route.params.id + '/edit'" > -->
