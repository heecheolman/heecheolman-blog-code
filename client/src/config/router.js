import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/spa/pages/MainPage';
import WebPage from '@/spa/pages/WebPage';

import WebPageIntro from '@/spa/pages/web/WebPageIntro';
import WebPage01 from '@/spa/pages/web/WebPage01';
import WebPage02 from '@/spa/pages/web/WebPage02';
import WebPage03 from '@/spa/pages/web/WebPage03';
// import Post from '@/spa/components/post/Post';
// import PostPipe from '@/spa/components/post/PostPipe';


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
        // {
        //   path: ':id',
        //   component: PostPipe,
        // },
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
      ],
    },
  ],
});
