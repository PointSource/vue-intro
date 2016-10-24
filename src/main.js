// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MasterView from 'components/MasterView.vue';
import DetailView from 'components/DetailView.vue';

var router = new VueRouter({
  routes: [
    { name: 'master', path: '/master', component: MasterView },
    { name: 'detail', path: '/detail/:articleId', component: DetailView },
    { path: '*', redirect: '/master' }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
