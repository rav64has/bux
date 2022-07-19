<template>
  <div id="header">
		<img   src="../assets/images/bux.png">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#00cc00">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DAMBUX</a>
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
          <router-link class="nav-link" to="/contacts">Контакты</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Вход
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="/login">Войти</router-link>
            <router-link to="/reg">Регистрация</router-link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </div>
</template>
<script>
export default {
  name: 'HederVue',
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
