<template>
  <div class="list">
  <NavBarch></NavBarch>
  <!-- <div class="container">
      <div class="row">
        <b-card v-for="item in vidlist" :title="item.snippet.title" :img-src="item.snippet.thumbnails.high.url" img-alt="Image" 
        img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <p class="card-text">
            {{item.snippet.description}}
          </p>
         
        </b-card>
      </div>
  </div>  -->

  <div class="container" align="center">
    <b-card class="text-center" style="max-width: 35rem;" text-align="center">
      <b-card overlay v-for="item in vidlist"
          :img-src="item.snippet.thumbnails.high.url"
          img-alt="Image"
          text-variant="light">
        <div class="windows">
          <h4> {{item.snippet.title}} </h4>
          <h6> {{item.snippet.channelTitle}} </h6>
        <p class="card-text">
        </p>
        </div>
        <br><br><br>
         <router-link :to="{ name: 'watch', params: { video_aidi: item.id.videoId }} ">
            <b-button variant="primary">Go to vidos</b-button>
          </router-link>
    </b-card>
    
  </b-card>
  </div>

  </div>
</template>

<script>

  import NavBarch from './index.vue'
export default {
  name: 'list',
  data () {
    return {
      msg: 'LIST',
      vidlist: this.$route.params.items
    }
  },
  component:{
    'NavBarch':NavBarch
  }
}


</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
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
  color: #ecfff6;
}
.windows {
  background-color: rgba(0, 0, 0, 0.65)
}
.bg-danger {
  background-color:darkred !important;
}
</style>