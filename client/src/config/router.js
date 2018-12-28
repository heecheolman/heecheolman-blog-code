import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/spa/pages/MainPage';

/* Category Router */
import JSRouter from './router-category/jsRouter';
import vueRouter from './router-category/vueRouter';
import gitRouter from './router-category/gitRouter';
import workRouter from './router-category/workRouter';
import algorithmRouter from './router-category/algorithmRouter';
import etcRouter from './router-category/etcRouter';
import whatRouter from './router-category/whatRouter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    ...JSRouter,
    ...vueRouter,
    ...gitRouter,
    ...workRouter,
    ...algorithmRouter,
    ...etcRouter,
    ...whatRouter,
  ],
});
