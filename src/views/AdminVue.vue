<template>
  <div>
     <form class = ""  @submit.prevent method="post" >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h2>News</h2>
        </div>
        <div class="col-md-6">
          <h2>Enlish</h2>
          <h3>Add title</h3>
          <input type="text" name="title_en" v-model="news.title_en" placeholder="Enter the name to become"/>
          <h3>Add artical</h3>
          <input type="text" name="artical_en" v-model="news.artical_en" placeholder="Enter the text of the article"/>
          <h2>Uzbek</h2>
          <h3>Sarlavha qo'shing</h3>
          <input type="text" name="title_uz" v-model="news.title_uz" placeholder="Sarlavha nomini  kiriting"/>
          <h3>Maqola qo'shing</h3>
          <input type="text" name="artical_uz" v-model="news.artical_uz" placeholder="Maqola matnini kiriting"/>
          <h2>Русский</h2>
          <h3>Добавить заголовок</h3>
          <input type="text" name="title_ru" v-model="news.title_ru" placeholder="Введите названия стать"/>
          <h3>Добавить статью</h3>
          <input type="text" name="artical_ru" v-model="news.artical_ru" placeholder="Введите текст статье"/>
          <h3>Add images</h3>
          <input
          type="file"
            id="file"
            ref="fileInput"
             accept="image/*,.png,.gif,.web,.jpg"
            v-on:change="onimageSelected"
          />
        </div>
      </div>
      <button @click="NewsSave">save</button>
    </div>
     </form>
  </div>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      news:{
      title_en: '',
      artical_en:'',
       title_uz: '',
      artical_uz:'',
       title_ru: '',
      artical_ru:''
      },
      selectedFile: null
    }
  },
  methods: {
     onimageSelected(event) {
      this.selectedFile = event.target.files[0]
    },
        NewsSave(){
          try {
          const fd = new FormData();
          
          fd.append('title_en', this.news.title_en);
          fd.append('artical_en', this.news.artical_en);
           fd.append('title_uz', this.news.title_uz);
          fd.append('artical_uz', this.news.artical_uz);
           fd.append('title_ru', this.news.title_ru);
          fd.append('artical_ru', this.news.artical_ru);
          fd.append('image', this.selectedFile, this.selectedFile.name);
          this.news.image = this.selectedFile;
          console.log(this.news, fd)
          axios.post("http://buxgalter/api/news",fd, {
            onUploadProgress: uploadEvent => {
              console.log('Upload Progress:' + Math.round(uploadEvent.loaded/uploadEvent.total*100) + '%')
            }
          }).then(res=> { console.log(res)
                     }) 
      } catch (error) {

        console.log(error)
        alert("Xato?");
      }
    }
    }
}
  
</script>

<style scoped>
.container {
  margin: 30px;
}
</style>