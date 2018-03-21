import Vue from 'vue'
import Router from 'vue-router'


import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import index from '@/components/index'
import list from '@/components/list'
import watch from '@/components/watch'
import VueResource from 'vue-resource';


Vue.use(Router)
Vue.use(VueResource)
Vue.use(BootstrapVue);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    }
  ]
})

