<template>
  <div>
    <h2> Дабавить данные</h2>
<form  class="login" @submit.prevent  method="post" enctype="multipart/form-data">
    <labe>Тип:</labe>
     <input name="type" v-model="add.type" required id="type" >
    <label>Дата:</label>
    <input name="date" type="date" v-model="add.date" required id="date" >
    <label>Наименование:</label>
    <input name="name" v-model="add.name" required id="name" >
    <label>Сумма:</label>
    <input name="summ" v-model="add.summ" id="summ">
    <label>Количество:</label>
    <input name="amout" v-model="add.amout"  id="model" >
   
    <button type="submit"  @click="send">Отправить</button>
    <button type="reset"  >Сброс</button>
</form>
  </div>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      add: {
        type: "",
        date:"",
        name:"",
        summ:"",
        amout:""
      }
     
    };
  },
  methods: {
    async send(){
      try {
        const response =  await axios.post("http://buxgalter/api/uchet", this.add)
           .then((response)=>{
            console.log(response.data)
         
        alert("Маълумотлар кўшилди")
        this.$router.push({path:"/about"})
        });
      } catch (error) {

        console.log(error)
        alert("Xato?");
      }
    },
  },
};
</script>
<style lang="css" scoped>

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
  height: 600px;
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
  margin: 15px;
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



