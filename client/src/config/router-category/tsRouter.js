/* TS Category */

import TSPage from '@/spa/pages/TypescriptPage';
import TSPage01 from '@/spa/pages/ts/TSPage01';
import TSPage02 from '@/spa/pages/ts/TSPage02';
import TSPage03 from '@/spa/pages/ts/TSPage03';
import TSPage04 from '@/spa/pages/ts/TSPage04';
import TSPage05 from '@/spa/pages/ts/TSPage05';

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
  {
    path: '/ts/posts/4',
    component: TSPage04,
  },
  {
    path: '/ts/posts/5',
    component: TSPage05,
  },
];
