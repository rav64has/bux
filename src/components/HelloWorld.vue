<template>
  <div class="hello">
    <h1>{{$t("home.title_1")}}</h1>
      <img src="../assets/images/office-full.png" align="center" >
<br/> 
<div class="contener">
  <div class="row">
    <div class="col-sm-6">
      <img src="../assets/images/about_1.png" align="imag_1" >
        <h4>{{$t("home.title_2")}}</h4>
        <p>{{$t("home.text_2")}}</p>
    </div>
    <div class="col-sm-6">
      <img src="../assets/images/about_2.png" align="imag_2" >
        <h4>{{$t("home.title_3")}}</h4>
        <p>{{$t("home.text_3")}}</p>
    </div>
  </div>
</div>
<div class="contener">
  <div class="row">
    <div class="col-sm-6">
      <img src="../assets/images/about_3.png" align="imag_3" >
        <h4>{{$t("home.title_4")}}</h4>
        <p>{{$t("home.text_4")}}</p>
    </div>
    <div class="col-sm-6">
      <img src="../assets/images/about_4.png" align="imag_4" >
        <h4>{{$t("home.title_5")}}</h4>
        <p>{{$t("home.text_5")}}</p>
    </div>
  </div>
</div>
<div class="contener">
  <div class="row">
    <div class="col-sm-6">
      <img src="../assets/images/about_5.png" align="imag_5" >
        <h4>{{$t("home.title_6")}}</h4>
        <p>{{$t("home.text_6")}}</p>
    </div>
    <div class="col-sm-6">
       <img src="../assets/images/about_6.png" align="imag_6" >
        <h4>{{$t("home.title_7")}}</h4>
        <p>{{$t("home.text_7")}}</p>
    </div>
  </div>
</div>
<div class="contener">
  <div class="row">
    <div class="col-sm-6">
      <img src="../assets/images/about_7.png" align="imag_7" >
        <h4>{{$t("home.title_8")}}</h4>
        <p>{{$t("home.text_8")}}</p>
    </div>
    <div class="col-sm-6">
      <img src="../assets/images/about_8.png" align="imag_8" >
        <h4>{{$t("home.title_9")}}</h4>
        <p>{{$t("home.text_9")}}</p>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
