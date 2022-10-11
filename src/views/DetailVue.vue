<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="news-detail">
          <div class="news-bg-img">
            <img :src="'http://buxgalter/storage/image/'+news.image" alt="" />
          </div>
          <div class="row">
            <div class="col-md-9">
              <div class="main-heading">
                <h1>{{news.title}}</h1>
                <div class="desc" >
                  <p>{{news.artical}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
  data() {
    return {
      news: '',
    };
  },
   created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      let newId = this.$route.params.id;
      let mydata = await Axios.get('http://buxgalter/api/news/' + newId);
      this.news = mydata.data;
    },
  },
};
</script>
<style>
.news-bg-img img {
  height: 400px;
  width: 400px;
  object-fit: cover;
  margin-bottom: 30px;
  margin-top: 30px;
}
.desc{
  text-align: center;
}
</style>