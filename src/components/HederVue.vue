<template>
  <div id="header">
		<img   src="../assets/images/bux.png">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#00cc00">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
    <img src="../assets/images/img-lYp2Oi.png" alt="Logo" style="width:50px;" class="round">
  </a>
        
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Главная</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Основное</router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" to="/news">Новости</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts">Контакты</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/avatar">Avatar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/image">Изображение</router-link>
        </li>
        </ul>
                                
    </div>
    <div class="collapse navbar-collapse">
       <ul class="navbar-nav" v-if="login">
          <li class="nav-item" >
             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ this.login }}
          </a> 
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link to="/profil">Пофиль</router-link>|</li>
            <li><button type="sambit" @click="logout">Выход</button></li>
           </ul>
          </li>
      </ul>  
    </div>
    <div class="collapse navbar-collapse" v-if="!login" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link"  to="/login">Войти</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/reg">Регистрация</router-link>
        </li>
      </ul>
    </div>
    <select>
	<option>Uzbek</option>
	<option value="/en/">English</option>
  	<option value="/ru/">Русский</option>
		<option value="/ўз/">Ўзбекча</option>
  	
</select>
 </div>
</nav>
 </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'HederVue',
  data(){
    return{
      login:window.localStorage.user,
      langs: ['uz', 'ru', 'en']
    }
  },
  methods: {
            logout() {
                axios.get("http://buxgalter/api/logout").then(response => {
                    localStorage.removeItem('user')
                    this.login=''
                    this.$router.push("/")

                }).catch(error => {
                    location.reload();
                    console.log(error)
                });
            }
 },
   mounted(){
    if(localStorage.user){
     
    this.login = localStorage.user
    }
  },
  watch:{
    login(newuser){
    localStorage.user = newuser
    }
  }

}
</script>
<style scoped>
img {
  width: 100%;
}
.round {
    border-radius: 100px; /* Радиус скругления */
    border: 3px solid green; /* Параметры рамки */
    box-shadow: 0 0 7px #666; /* Параметры тени */
   }
</style>
