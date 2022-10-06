<template>
  <div class="profil">
    <div class="card-deck">
      <div class="card bg-light" style="width: 400px">
        <div class="card-body text-center">
          <img class="card-img-top" src="img_avatar1.png" alt="Card image" />
          <!-- <img :src="profileImage" class="profile-image" /> -->
          <input
            type="file"
            ref="profileimage"
            @change="onUploadImage"
            class="profile-image-input"
          />
          <br>
          <button class="btn btn-primary" @click="onSelectImage">
            Update Photo
          </button>
        </div>
      </div>
      <div class="card bg-light"  style="width: 600px">
        <div class="card-body text-center">
          <h3>User</h3>
          <h4 class="card-title">John CSS</h4>
          <p class="card-text">Some example text.</p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>
  </div>
</template>
// <script>
// import Auth from "../helpers/Auth";

// export default {
//     computed: {
//         profileImage() {
//             return this.$store.state.Auth.photo;
//         }
//     },

//     data() {
//         return {
//             form: {
//                 name: null,
//                 email: null,
//                 password: null,
//                 password_confirmation: null,
//                 action: null
//             },

//             errors: {}
//         };
//     },

//     created() {
//         this.edit_profile();
//     },

//     methods: {
//         edit_profile() {
//             axios
//                 .post("/api/edit_profile")
//                 .then(response => {
//                     if (response.data.success) {
//                         this.form = response.data.user;
//                     }
//                 })
//                 .catch(error => {
//                     if (error.response.status === 401) {
//                         Auth.logout();
//                         this.$router.push("/login");
//                     }
//                 });
//         },

//         onUpdate(action) {
//             this.errors = {};
//             this.form.action = action;

//             axios
//                 .post("/api/update_profile", this.form)
//                 .then(response => {
//                     if (response.data.success) {
//                         Auth.login(response.data.user);

//                         this.$store.commit(
//                             "showInfo",
//                             "Your profile was successfuly updated."
//                         );
//                     }
//                 })
//                 .catch(error => {
//                     this.errors = error.response.data.errors;
//                 });
//         },

//         checkError(field) {
//             return this.errors.hasOwnProperty(field) ? this.errors[field] : [];
//         },

//         onSelectImage() {
//             this.$refs.profileimage.click();
//         },

//         onUploadImage(e) {
//             if (e.target.files && e.target.files.length) {
//                 let file = e.target.files[0];
//                 let data = new FormData();
//                 this.form.action = "photo";
//                 for (let i in this.form) {
//                     data.append(i, this.form[i]);
//                 }
//                 data.append("profilephoto", file);

//                 axios.post("/api/update_profile", data).then(response => {
//                     if (response.data.success) {
//                         Auth.login(response.data.user);

//                         this.$store.commit(
//                             "showInfo",
//                             "Your photo was successfuly updated."
//                         );
//                     }
//                 });
//             }
//         }
//     }
// };
// </script> 

<style>
.profil{
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
</style>
