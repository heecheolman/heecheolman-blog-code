import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/spa/pages/MainPage';
import WebPage from '@/spa/pages/WebPage';

import WebPageIntro from '@/spa/pages/web/WebPageIntro';
import WebPage01 from '@/spa/pages/web/WebPage01';
import WebPage02 from '@/spa/pages/web/WebPage02';
import WebPage03 from '@/spa/pages/web/WebPage03';
import WebPage04 from '@/spa/pages/web/WebPage04';
import WebPage05 from '@/spa/pages/web/WebPage05';
import WebPage06 from '@/spa/pages/web/WebPage06';
import WebPage07 from '@/spa/pages/web/WebPage07';
import WebPage08 from '@/spa/pages/web/WebPage08';
import WebPage09 from '@/spa/pages/web/WebPage09';
import WebPage10 from '@/spa/pages/web/WebPage10';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/web/posts',
      name: 'WebPage',
      component: WebPage,
      children: [
        {
          path: 'intro',
          component: WebPageIntro,
        },
        {
          path: '1',
          component: WebPage01,
        },
        {
          path: '2',
          component: WebPage02,
        },
        {
          path: '3',
          component: WebPage03,
        },
        {
          path: '4',
          component: WebPage04,
        },
        {
          path: '5',
          component: WebPage05,
        },
        {
          path: '6',
          component: WebPage06,
        },
        {
          path: '7',
          component: WebPage07,
        },
        {
          path: '8',
          component: WebPage08,
        },
        {
          path: '9',
          component: WebPage09,
        },
        {
          path: '10',
          component: WebPage10,
        },
      ],
    },
  ],
});
