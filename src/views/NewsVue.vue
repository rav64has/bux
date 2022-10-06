<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="heading-sec">
          <h1>A news application from Vue.js</h1>
        </div>
      </div>
      <div
        class="col-md-4"
        v-for="news in newsList.slice(0, 6)"
        v-bind:key="news.id"
      >
        <router-link :to="`/news/${news.id}`" class="news-item">
          <div class="news-img">
            <img
              :src="news.jetpack_featured_media_url"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="text-sec">
            <h5 class="news-title" v-html="news.title.rendered"></h5>
            <div class="publisher-info d-flex align-item-center">
              <div class="info">
                <span class="publisher-date">{{ news.date }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// import "bootstrap";
import Axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

const base_url = "https://techcrunch.com/wp-json/wp/v2/posts/";

export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    this.getNewsDetail();
  },
  methods: {
    async getNewsDetail() {
      let response = await Axios.get(base_url);
      this.newsList = response.data;
    },
  },
};
</script>
<style>
.heading-sec {
  margin: 3.75rem 0;
}
.heading-sec h1 {
  font-family: "Pirata One", cursive;
  text-transform: capitalize;
  color: #2d2d2d;
  font-size: 48px;
}
.news-item {
  border-radius: 7px;
  box-shadow: 0 0 20px 5px #00000008;
  margin-bottom: 30px;
  color: #2b2b2b;
  display: block;
}
.news-item .news-img img {
  border-radius: 7px 7px 0 0;
  height: 230px;
  width: 100%;
  object-fit: cover;
}
.news-item .text-sec {
  background-color: #fff;
  padding: 27px 25px;
  border-radius: 0 0 7px 7px;
}
.news-item .text-sec h5 {
  line-height: 28px;
  margin-bottom: 1rem;
}
.news-item .text-sec p {
  font-size: 14px;
  opacity: 70%;
  margin-bottom: 22px;
}
.news-item .text-sec .publisher-date {
  opacity: 70%;
  font-size: 13px;
}
</style>