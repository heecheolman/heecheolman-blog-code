/* Work Category */

import WorkPage from '@/spa/pages/WorkPage';
import WorkPage01 from '@/spa/pages/work/WorkPage01';
import WorkPage02 from '@/spa/pages/work/WorkPage02';
import WorkPage03 from '@/spa/pages/work/WorkPage03';
import WorkPage04 from '@/spa/pages/work/WorkPage04';

export default [
  {
    path: '/work/posts',
    name: 'WorkPage',
    component: WorkPage,
  },
  {
    path: '/work/posts/1',
    component: WorkPage01,
  },
  {
    path: '/work/posts/2',
    component: WorkPage02,
  },
  {
    path: '/work/posts/3',
    component: WorkPage03,
  },{
    path: '/work/posts/4',
    component: WorkPage04,
  },
];
