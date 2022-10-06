<template>
  <div class="container">
    <table class='table'>
      <thead>
        <tr>
          <th> №  </th>
          <th>Изображения</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in image" v-bind:key="data.id">
           <td>{{data.id}}</td>
           <td><img :src="'http://buxgalter/storage/image/'+data.image" alt="" height="244px"></td>
        </tr>
      </tbody>
    </table>
    <button @click="send">Получить</button>
  </div>
</template>
<script>
import Axios from 'axios';

export default {
  data() {
    return {
      image:''
     };
  },
  methods: {
        send(){
       Axios.get("http://buxgalter/api/imageGet")
      .then((response)=>{
            this.image=response.data
            console.log(this.image)
    })
  }
  }
}
</script>
<style  scoped>



</style>