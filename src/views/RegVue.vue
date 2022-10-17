<template>
  <form
    class=""
    @submit.prevent
    method="post"
    enctype="multipart/form-data"
  >
  <h2>{{$t("register.title")}}</h2>
  <div class="group">
    <label>{{$t("register.name")}}</label>
    <input
      type="text"
      name="full_name"
      v-model="register.full_name"
      :placeholder="$t('register.Name')"
    />
  </div>
  <div class="group">
    <label>{{$t("register.login")}}</label>
    <input
      type="text"
      name="login"
      v-model="register.login"
      :placeholder="$t('register.login')"
    />
  </div>
  <div class="group">
    <label>{{$t("register.email")}}</label>
    <input
      type="email"
      name="email"
      v-model="register.email"
      :placeholder="$t('register.email')"
    />
  </div>
  <div class="group">
    <label>{{$t("register.avatar")}}</label>
    <input 
      type="file"
      id="file"
      ref="fileInput"
      accept="image/*,.png,.gif,.web,.jpg"
      v-on:change="onfileSelected"
      name="avatar" />
  </div>
  <div class="group">
    <label>{{$t("register.password")}}</label>
    <input
      type="password"
      name="password"
      v-model="register.password"
      :placeholder="$t('register.password_1')"
    />
  </div>
  <div class="group">
    <label>{{$t("register.password_2")}}</label>
    <input
      type="password"
      name="password_confirm"
      v-model="register.password_confirm"
      :placeholder="$t('register.password_3')"
    />
  </div>
  <div class="group"
    <button type="submit"  @click="Register">
      {{$t("register.title")}}
    </button>
  </div>
    <p>{{$t("register.account")}} - <a href="/login">{{$t("register.log")}}</a>!</p>
  
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
        password_confirm: "",
        selectedFile: null
      },
      
    };
  },
  methods: {
    async Register(){
      try {
          const fd = new FormData();
          fd.append('full_name', this.register.full_name);
          fd.append('login', this.register.login);
          fd.append('email', this.register.email);
          fd.append('password', this.register.password);
           fd.append('password_confirm', this.register.password_confirm);
          fd.append('avatar', this.selectedFile, this.selectedFile.name);
          // console.log(fd)
          await axios.post("http://buxgalter/api/register",fd)
         
          .then((fd)=>{
            console.log(fd)
        alert("Ro'yhatdan o'tdingiz !")
        });
      } catch (error) {

        console.log(error)
        alert("Xato, Ro'yhatdan o'tmadiz.");
      }
    },
     onfileSelected(event) {
      this.selectedFile = event.target.files[0]
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


