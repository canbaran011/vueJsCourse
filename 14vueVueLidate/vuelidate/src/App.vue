<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="card p-4 mt-3  shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>  <!-- @input="$v.email.$touch()"  blur yerine v-model="$v.email.$model" olabilir-->
            <input 
            @blur="$v.email.$touch()" 
            v-model="email" 
            type="email" 
            class="form-control"
            :class="{'is-invalid' : $v.email.$error }" 
            placeholder="E-posta adresini giriniz">
            <small v-if="!$v.email.required" class="form-text  text-danger">*Bu alan zorunludur.</small>
            <small v-if="!$v.email.email" class="form-text  text-danger">*Gecerli bir email girin.</small>

          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input v-model="$v.password.$model" type="password" class="form-control" placeholder="Şifrenizi giriniz">
            <small v-if="!$v.password.required" class="form-text  text-danger">*Bu alan zorunludur.</small>
            <small v-if="!$v.password.numeric" class="form-text  text-danger">*Gecerli bir rakamlardan olan sifre giriniz.</small>
            <small v-if="!$v.password.minLength" class="form-text  text-danger">*min {{ $v.password.$params.minLength.min }} karakter olan sifre giriniz.</small>
            <small v-if="!$v.password.maxLength" class="form-text  text-danger">*max 10 karakter olan sifre giriniz.</small>

          </div>
          <div class="form-group">
            <label>Şifre Tekrar</label>
            <input v-model="$v.repassword.$model" type="password" class="form-control" placeholder="Şifrenizi tekrar giriniz">
            <small v-if="!$v.repassword.required" class="form-text  text-danger">*Bu alan zorunludur.</small>
            <small v-if="!$v.repassword.numeric" class="form-text  text-danger">*Gecerli bir rakamlardan olan sifre giriniz.</small>
            <small v-if="!$v.repassword.minLength" class="form-text  text-danger">*min {{ $v.repassword.$params.minLength.min }} karakter olan sifre giriniz.</small>
            <small v-if="!$v.repassword .maxLength" class="form-text  text-danger">*max 10 karakter olan sifre giriniz.</small>
            <small v-if="!$v.repassword .sameAs" class="form-text  text-danger">*Iki sifre ayni olmalidir.</small>

          </div>
          <div class="form-group">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select v-model="selectedCategory" class="form-control">
              <option v-for="category in categories" :value="category">{{ category }}</option>
            </select>
          </div>

          <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">İlgi Alanı Ekle</a>

          <ul class="list-group mt-3 mb-3 border-0">
            <li v-for="(hobby,index) in hobbies" class="list-group-item d-flex pl-2">
              <input type="text" class="form-control mr-2" v-model="hobby.value">
              <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul>
         
          <button class="btn btn-outline-secondary rounded-0">Kaydet</button>
        </form>
      </div>
       <div class="card p-4 mt-3 ml-3 shadow" style="width:400px">
          <p> {{ $v.repassword }}  </p>

        </div> 
    </div>
    
  </div>
</template>
<script>
import {required , email ,numeric ,minLength ,maxLength ,sameAs} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email : null,
        password : null,
        repassword : null,
        selectedCategory : null,
        categories : ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
        hobbies: []
      }
    },
    validations :{
      email : {
        required,
        email
      },
      password :{
        required,
        numeric,
        minLength : minLength(5),
        maxLength : maxLength(10)
      },
      repassword :{
        required,
        numeric,
        minLength : minLength(5),
        maxLength : maxLength(10),
        sameAs : sameAs("password")
        // sameAs : sameAs( vm => {
        //   return vm.password + "11"
        // } )
},
    },
    methods: {
      onSubmit(){
        let form = {
          email : this.email,
          password : this.password,
          category : this.category,
          hobbies : this.hobbies,
        }
        console.log(form)
      },
      newHobby(){
        let hobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbies.push(hobby)
      }
    }
  }
</script>
