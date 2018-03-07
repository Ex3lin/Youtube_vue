<template>
  <div class="index">
<b-navbar toggleable="md" type="dark" variant="danger">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand><router-link :to="{ name: 'index'}">TooYobe</router-link></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item><router-link :to="{ name: 'list'}">list</router-link></b-nav-item>
      <b-nav-item><router-link :to="{ name: 'watch'}">watch</router-link></b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form @submit="onSubmit">
        <b-form-input id="searchbar"
                      size="sm" 
                      v-model="form.search" 
                      required
                      type="text" 
                      placeholder="Введите запрос"/>
        </b-form-input>
        
        <b-button size="sm" 
                  type="submit">Search</b-button>
      </b-nav-form>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <h1>
      {{ msg }}
    </h1>
    <br>
      <p>Value: {{ form.search }}</p>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'INDEX',
      form: {
        search: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
}

import { Form } from 'bootstrap-vue/es/components';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
