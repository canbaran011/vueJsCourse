<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-g">
          <input type="text" class="form-control" v-model="userName" /> <br />
        </div>
        <button @click="saveUser" class="btn btn-primary">Save</button>
        <button @click="getUsers" class="btn btn-warning">GetUsers</button>
        <hr />
        <ul class="list-group">
          <li v-for="user in userList" class="list-group-item">
            <span> {{ user.data.userName }} </span>
            <button class="btn btn-danger " @click="deleteUser(user.key)">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
      userList: [],
    };
  },
    methods: {
    saveUser() {
      // alert(this.userName)
      // this.$http.post("users.json", {userName:this.userName} ) //link uzantisi "" icine eklenebilir.
      //   .then((response) => {
      //     console.log(response);
      //   });

      this.$resource("users.json").save({}, { userName: this.userName });
          // this.resource.kaydet({}, {userName :this.userName})
},
    getUsers() {
      // alert("getuser")

      this.$resource("users.json")
        .get()
        .then((response) => {
          // data yerine body de olabilirdi // console.log(response.data);
          return response.json();
        })
        .then((data) => {
          for (let key in data.userList) {
            this.userList.push({
              key: key,
              data: data.userList[key],
            });
          }
        });
    },
    deleteUser(userKey) {
      // this.$http.delete("users/"+userKey+".json")
      // .then(response => {
      //   console.log(response);
      // })
      this.$resource.delete("users/" + userKey + ".json");
    },
  },
  created(){
    // const customActions = {
    //   kaydet : { method : "POST" , url : "users.json" }
    // };
    // this.resource = this.$resource("users.json" , {} , customActions)
  }
};
</script>

<style></style>
