<template>
  <div>
     <form class = ""  @submit.prevent method="post" >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h2>News</h2>
        </div>
        <div class="col-md-6">
          <h3>Add title</h3>
          <input type="text" name="title" v-model="news.title" placeholder="Введите названия стать"/>
          <h3>Add artical</h3>
          <input type="text" name="artical" v-model="news.artical" placeholder="Введите текст статье"/>
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
      title: '',
      artical:''
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
          fd.append('image', this.selectedFile, this.selectedFile.name);
          fd.append('title', this.news.title);
          fd.append('artical', this.news.artical);
          
          this.news.image = this.selectedFile;
          console.log(fd)
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