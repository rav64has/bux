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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Вход
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="/login">Войти</router-link>|
            <router-link to="/reg">Регистрация</router-link>|
            <router-link to="/">Выход</router-link>|
          </ul>
        </li>
      </ul>
                                
    </div>
    <div class="collapse navbar-collapse">
       <ul class="navbar-nav" v-if="login">
          <li class="nav-item" style="color: white">
              {{ this.login }}
          </li>
      </ul>  
    </div>
    <button class="lang-btn">
      <!-- <select v-model="$i18n.lang">  -->
        <option v-for="(lang, i) in langs" :key="`lang${i}`" :value="lang">
           {{ lang }}
        </option>
      <!-- </select>  -->
    </button> 
  </div>
</nav>
 </div>
</template>
<script>
export default {
  name: 'HederVue',
  data(){
    return{
      login:window.localStorage.user,
      langs: ['uz', 'ru', 'en']
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
