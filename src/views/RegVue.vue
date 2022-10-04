<template>
  <form
    class=""
    @submit.prevent
    method="post"
    enctype="multipart/form-data"
  >
  <div class="group">
    <label>ФИО</label>
    <input
      type="text"
      name="full_name"
      v-model="register.full_name"
      placeholder="Введите свое полное имя"
    />
  </div>
  <div class="group">
    <label>Логин</label>
    <input
      type="text"
      name="login"
      v-model="register.login"
      placeholder="Введите свой логин"
    />
  </div>
  <div class="group">
    <label>Почта</label>
    <input
      type="email"
      name="email"
      v-model="register.email"
      placeholder="Введите адрес своей почты"
    />
  </div>
  <div class="group">
    <label>Изображение профиля</label>
    <input type="text" name="avatar" v-model="register.avatar"/>
  </div>
  <div class="group">
    <label>Пароль</label>
    <input
      type="password"
      name="password"
      v-model="register.password"
      placeholder="Введите пароль"
    />
  </div>
  <div class="group">
    <label>Подтверждение пароля</label>
    <input
      type="password"
      name="password_confirm"
      v-model="register.password_confirm"
      placeholder="Подтвердите пароль"
    />
  </div>
  <div class="group"
    <button type="submit"  @click="Register">
      Регистрация
    </button>
  </div>
    <p>У вас уже есть аккаунт? - <a href="/login">авторизируйтесь</a>!</p>
  
  </form>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      register: {
        full_name: "",
        login: "",
        email: "",
        avatar: "",
        password: "",
        password_confirm: ""
      },
    };
  },
  methods: {
    async Register(){
      try {
        const response =  await axios.post("http://buxgalter/api/register", this.register)
          .then((response)=>{
            console.log(response.data)
        alert("Ro'yhatdan o'tdingiz !")
        });
      } catch (error) {

        console.log(error)
        alert("Xato, Ro'yhatdan o'tmadiz.");
      }
    },
  },
};
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  
}
p {
  cursor: help;
  margin: 20px;
  text-transform: uppercase;
  padding-bottom: 5px;
  border-bottom: 3px solid #a50000;
}
form {
  
  margin: 0 auto;
  background: rgba(33, 225, 65, 0.77);
  width: 450px;
  height: 800px;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.82);
  margin-bottom: 25px;
  margin-top: 25px;
  
}
.group {
  margin: 10px;
  padding: 5px;
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
button {
  cursor: pointer;
  padding: 10px 30px;
  height: 50px;
  color: #fff;
  background: #10c2e2;
  border: none;
  text-transform: uppercase;
  font-size: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.82);
}
button:hover {
  opacity: 0.8;
  font-weight: bold;
  transform: scale(1.1);
}
</style>


