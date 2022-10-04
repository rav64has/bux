<template>
  <div class="about">
    <table class='table'>
    <thead>
        <tr>
            <th> №  </th>
            <th>Тип</th>
            <th>Дата</th>
            <th>Наименование </th>
            <th>Стоимость, сум.</th>
            <th>Количеств</th>
            <th>Удалить</th>
            <th>Редактировать</th>
        </tr>
    </thead>
    <tbody>
         
    <tr v-for="data in uchet" v-bind:key="data.id">

    <td>{{data.id}}</td>
    <td>{{data.type}}</td>
    <td>{{data.date}}</td>
    <td>{{data.name}}</td>
    <td>{{data.summ}}</td>
    <td>{{data.amout}}</td>
    <td><button type="submit" @click="uchetDelete(data.id)">delete</button></td>
    <td><router-link :to="'/edit/'+data.id">edit</router-link></td>
    </tr>
     </tbody>
    </table>
   <button class="btn btn-success" type="submit" onclick="window.location.href ='/add'" >Add</button>
   
  </div>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      uchet: [],
    };
  },
  methods: {
     uchets(){
      try {
         axios.get("http://buxgalter/api/uchet")
          .then((response)=>{
            this.uchet=response.data
            console.log(this.uchet)
           
        
        });
      } 
      catch (error) {

        console.log(error)
        alert("Xato ?");
          }
    },
    uchetDelete(id){
       try {
         axios.delete("http://buxgalter/api/uchet/${id}")
          .then((response)=>{
            this.uchet=response.data
            console.log(this.uchet)
             alert("Маълумотлар ўчирилди!")
            this.$router.push({path:"/about"})
        
        });
      } 
      catch (error) {

        console.log(error)
        alert("Xato ?");
          }
    }

  },

  mounted(){
    this.uchets()
  }
};
</script>

