// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueRouter);

import Detail from 'components/Detail.vue';

var router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: App },
    { name: 'detail', path: '/detail/:articleId', component: Detail },
    { path: '*', redirect: '/' }
  ]
});

/* eslint-disable no-new */
new Vue({ router }).$mount('#app');
