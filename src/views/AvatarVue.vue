<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <form class="form-control" @submit.prevent enctype="multipart/form-data">
        <label
          >
          <input
           style="display:none"
            type="file"
            id="file"
            ref="fileInput"
             accept="image/*,.png,.gif,.web,.jpg"
            v-on:change="onfileSelected"
          />
        </label>
        <button @click="$refs.fileInput.click()">Pick File</button>
        <br>
        <button @click="onUpload">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return {
    selectedFile: null
    }
  },

  methods: {
    onfileSelected(event) {
      this.selectedFile = event.target.files[0]
    },

    onUpload(){
          const fd = new FormData();
          fd.append('image', this.selectedFile, this.selectedFile.name);
          axios.post("http://buxgalter/api/upload",fd,{
            onUploadProgress: uploadEvent => {
              console.log('Upload Progress:' + Math.round(uploadEvent.loaded/uploadEvent.total*100) + '%')
            }
          })
             .then(res=> {
              console.log(res)
             })
        }
}
}
</script>
<style scoped>
.container {
  margin: 100px;
  height: 400px;
}
button {
  margin: 30px;
}
</style>
