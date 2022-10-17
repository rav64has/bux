<template>
  <div class="about">
    <table class='table'>
    <thead>
        <tr>
            <th> №  </th>
            <th>{{$t("about.type")}}</th>
            <th>{{$t("about.date")}}</th>
            <th>{{$t("about.name")}}</th>
            <th>{{$t("about.summ")}}</th>
            <th>{{$t("about.amout")}}</th>
            <th>{{$t("about.delete")}}</th>
            <th>{{$t("about.edit")}}</th>
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
     <!-- <td><router-link :to="'/delete/'+data.id">delete</router-link></td> -->
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
    async uchetDelete(id){
       try {
           await axios.delete("http://buxgalter/api/uchetDelete/"+id)
           .then((response) => {
            console.log(response.data);
            alert("Маълумотлар ўчирилди!");
            this.$router.push({path:"/"})
        
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

