<template>
  <form class = ""  @submit.prevent method="post" >
        <label>Логин</label>
        <input type="text" name="login" v-model="login.login" placeholder="Введите свой логин">
        <label>Пароль</label>
        <input type="password" name="password" v-model="login.password" placeholder="Введите пароль">
        <button type="submit" @click="Login" class="btn btn-primary btn-block" >Войти</button>
        <p>
            У вас нет аккаунта? - <a href="/reg">зарегистрируйтесь</a>!
        </p>
  </form>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      login: {
        login: "",
        password: "",
              },
    };
  },
  methods: {
    async Login(){
      try {
        const response =  await axios.post("http://buxgalter/api/login", this.login)
          .then((response)=>{
            console.log(response.data)
          if(response.data.is_admin == 1){
            this.$router.push({path:"/admin"})
          }else{
            this.$router.push({path:"/"})
          }
          alert("Calom " + this.login.login + " !")
        });
      } catch (error) {

        console.log(error)
        alert("Xato, Parol yki login noturu.");
      }
    },
  },
};
</script>
<style scoped>
form {
   margin: 0 auto;
  background: rgba(33, 225, 65, 0.77);
  width: 450px;
  height: 400px;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.82);
  margin-bottom: 25px;
  margin-top: 25px;
    
}
label {
  padding-left: 10px;
  text-transform: uppercase;
}
input {
  margin-top: 10px;
  height: 40px;
  width: 400px;
  border-radius: 20px/20px;
  border: none;
  padding-left: 15px;
  font-size: 18px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.82);
}
input:focus {
  border: 2px solid #6c00ff;
  transform: translateX(15px);
  width: 385px;
}

a {
    color: #7c9ab7;
    font-weight: bold;
    text-decoration: none;
}

p {
    margin: 10px 0;
}
button {
  margin: 50px;

}









</style>