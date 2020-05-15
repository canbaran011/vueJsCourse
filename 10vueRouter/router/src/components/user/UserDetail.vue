<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>kullanicinin id bilgisi > {{ $route.params.id }}</p>
    <p>
      Lorem ipsum dolor sit amet,
    </p>
    <router-link 
    tag="button" 
    class="btn btn-primary" 
    :to="navigationLink">
      Edit User
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigationLink: {
        name: "userEdit",
        params: { id: this.$route.params.id },  //yukarda this olmadan
        query: { name: "can", lastName: "baran" },
        hash : '#data'
      },
    };
  },
  beforeRouteEnter (to, from, next) {
    console.log("component seviyesonde kontrol");
    // burada http ile dis service lere bagkanilabilir..
    next();

}
}
</script>
<!-- :to="'/user/'+ $route.params.id + '/edit'" > -->
