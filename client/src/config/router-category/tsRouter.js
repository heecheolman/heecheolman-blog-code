/* TS Category */

import TSPage from '@/spa/pages/TypescriptPage';
import TSPage01 from '@/spa/pages/ts/TSPage01';
import TSPage02 from '@/spa/pages/ts/TSPage02';
import TSPage03 from '@/spa/pages/ts/TSPage03';

export default [
  {
    path: '/ts/posts',
    name: 'TypescriptPage',
    component: TSPage,
  },
  {
    path: '/ts/posts/1',
    component: TSPage01,
  },
  {
    path: '/ts/posts/2',
    component: TSPage02,
  },
  {
    path: '/ts/posts/3',
    component: TSPage03,
  },
];
