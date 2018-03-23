<template>
  <div class="index">
    <b-navbar toggleable="md" type="dark" variant="danger" sticky="true">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand>
        <router-link :to="{ name: 'index'}">
          <h1><img src="../img/pony.png" width="70px" class="d-inline-block align-top" alt="BV">TooYobe</h1>
        </router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- SEARCH -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="onSubmit">
            <b-form-input id="searchbar" size="sm" v-model="form.search" required type="text" placeholder="Введите запрос" />
              <b-button size="sm" variant="outline-danger" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>


  export default {
    name: "index",
    data() {
      return {
        msg: "INDEX",
        form: {
          search: ""
        },
        searchitems: []
      };
    },
    methods: {
      onSubmit() {
        var api_key = "AIzaSyDlqPgqv2tk_eTcmiwVvC6lq7TpMHNLpag";
        // console.log(this);
        this.$http
          .get(
            "https://www.googleapis.com/youtube/v3/search?q=" +
            this.form.search +
            "&part=snippet&key=" +
            api_key
          )
          .then(
            response => {
              console.log(response);
              console.log("this props");
              this.searchitems = response.body.items;

              this.$router.push({ name: 'list', params: { items: this.searchitems }})
            },
            response => {
              // error callbsnippetack href="#"
            }
          );
      }
    }
  };

  import { Form } from "bootstrap-vue/es/components";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
    margin-bottom: 0px !important;
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
    background-color: rgba(0, 0, 0, 0.748) !important;
  }

  .navbar-brand{
    margin-bottom: 0px !important;
    padding-bottom: 0px;
  }
</style>