/* Git Category */

import GitPage from '@/spa/pages/GitPage';
import GitPage01 from '@/spa/pages/git/GitPage01';
import GitPage02 from '@/spa/pages/git/GitPage02';

export default [
  {
    path: '/git/posts',
    name: 'GitPage',
    component: GitPage,
  },
  {
    path: '/git/posts/1',
    component: GitPage01,
  },
  {
    path: '/git/posts/2',
    component: GitPage02,
  },
];
