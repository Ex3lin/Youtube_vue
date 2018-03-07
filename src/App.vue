<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
function init () {
  gapi.client.setApiKey("AIzaSyDlqPgqv2tk_eTcmiwVvC6lq7TpMHNLpag");
  gapi.client.load("youtube", "v3", function() {
    //инициализируем подключение к YT  
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
