<template>
   <div class="watch">
     <b-navbar toggleable="md" type="dark" variant="danger">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand><router-link :to="{ name: 'index'}">TooYobe</router-link></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>

      <router-link :to="{ name: 'list'}">list</router-link>
      <!-- <iframe 
      width="560" 
      height="315" 
      :src="'https://www.youtube.com/embed/' + videoid"
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe> -->
      <div class="container">
      <b-embed 
        type="iframe"
        width="640"
        height="480"
        <!-- aspect="16by9" -->
        :src="'https://www.youtube.com/embed/' + videoid"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </b-embed>
      </div>

   </div>

</template>

<script>
export default {
  name: 'watch',
  data () {
    return {
      msg: 'PLAYER',
      videoid: this.$route.params.video_aidi
    }
  },
  created: function()
  {
    
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

.bg-danger {
  background-color:darkred !important;
}
</style>