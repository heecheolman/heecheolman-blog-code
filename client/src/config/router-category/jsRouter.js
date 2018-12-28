import JSPage from '@/spa/pages/JavascriptPage';
import JSPage01 from '@/spa/pages/js/JSPage01';
import JSPage02 from '@/spa/pages/js/JSPage02';
import JSPage03 from '@/spa/pages/js/JSPage03';
import JSPage04 from '@/spa/pages/js/JSPage04';
import JSPage05 from '@/spa/pages/js/JSPage05';
import JSPage06 from '@/spa/pages/js/JSPage06';
import JSPage07 from '@/spa/pages/js/JSPage07';
import JSPage08 from '@/spa/pages/js/JSPage08';
import JSPage09 from '@/spa/pages/js/JSPage09';
import JSPage10 from '@/spa/pages/js/JSPage10';

export default [
  {
    path: '/js/posts',
    name: 'JavascriptPage',
    component: JSPage,
  },
  {
    path: '/js/posts/1',
    component: JSPage01,
  },
  {
    path: '/js/posts/2',
    component: JSPage02,
  },
  {
    path: '/js/posts/3',
    component: JSPage03,
  },
  {
    path: '/js/posts/4',
    component: JSPage04,
  },
  {
    path: '/js/posts/5',
    component: JSPage05,
  },
  {
    path: '/js/posts/6',
    component: JSPage06,
  },
  {
    path: '/js/posts/7',
    component: JSPage07,
  },
  {
    path: '/js/posts/8',
    component: JSPage08,
  },
  {
    path: '/js/posts/9',
    component: JSPage09,
  },
  {
    path: '/js/posts/10',
    component: JSPage10,
  },
];
