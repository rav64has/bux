<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h2>News</h2>
        </div>
        <div class="col-md-6">
          <h3>Add title</h3>
          <input/>
          <h3>Add text</h3>
          <input/>
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
    </div>
  </div>
</template>
<style scoped>
.container {
  margin: 30px;
}
</style>