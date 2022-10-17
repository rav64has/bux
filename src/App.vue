<template>
  <div id="app">
    <heder-vue/>
    <router-view/>
    <footer-vue/>
  </div>
</template>
<script>
import HederVue from './components/HederVue.vue'
import FooterVue from './components/FooterVue.vue'
export default {
  name: 'app',
  components: {
    HederVue,
    FooterVue
  }
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
