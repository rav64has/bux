<template>
  <div class="profil">
    <div class="card-deck">
      <div class="card bg-light" style="width: 400px">
        <div class="card-body text-center">
          <img
            :src="'http://buxgalter/storage/image/' + users.avatar"
            alt="Card image"
            height="244px"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="card bg-light" style="width: 600px">
        <div class="card-body text-center">
          <h3>User</h3>
          <h4 class="card-title">{{ users.full_name }}</h4>
          <p>Ваш логин</p>
          <p class="card-text">{{ users.login }}</p>
          <p>Ваш почта</p>
          <p class="card-text">{{ users.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: '',
      email: ''
    }
  },
 methods:{
  async register(){
    this.email = localStorage.getItem('email')
      console.log(this.email);
     axios.get("http://buxgalter/api/register/"+this.email).then((response) => {
      this.users = response.data
      console.log(response.data);
    });
  }
 },
  mounted() {
   this.register();
  }
}
</script>

<style>
.profil {
  margin: 50px;
}
.profile-image {
  width: 200px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.profile-image-input {
  display: none;
}
button {
  margin: 25px;
}
</style>
