<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="news-detail">
          <div class="news-bg-img">
            <img :src="post.jetpack_featured_media_url" alt="" />
          </div>
          <div class="row">
            <div class="col-md-9">
              <div class="main-heading">
                <h1 v-html="post.title.rendered"></h1>
                <div class="desc" v-html="post.content.rendered"></div>
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
      post: '',
    };
  },
   created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      let newId = this.$route.params.id;
      let mydata = await Axios.get('https://techcrunch.com/wp-json/wp/v2/posts/' + newId);
      this.post = mydata.data;
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
</style>