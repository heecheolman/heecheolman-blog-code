/* Vue Category */

import VuePage from '@/spa/pages/VuePage';
import VuePage01 from '@/spa/pages/vue/VuePage01';
import VuePage02 from '@/spa/pages/vue/VuePage02';
import VuePage03 from '@/spa/pages/vue/VuePage03';

export default [
  {
    path: '/vue/posts',
    name: 'VuePage',
    component: VuePage,
  },
  {
    path: '/vue/posts/1',
    component: VuePage01,
  },
  {
    path: '/vue/posts/2',
    component: VuePage02,
  },
  {
    path: '/vue/posts/3',
    component: VuePage03,
  },
];
