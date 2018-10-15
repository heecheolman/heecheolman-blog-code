import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './../spa/pages/MainPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
  ],
});
