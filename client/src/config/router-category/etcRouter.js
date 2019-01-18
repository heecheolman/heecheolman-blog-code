/* etc Category */

import EtcPage from '@/spa/pages/EtcPage';
import EtcPage01 from '@/spa/pages/etc/EtcPage01';
import EtcPage02 from '@/spa/pages/etc/EtcPage02';
import EtcPage03 from '@/spa/pages/etc/EtcPage03';
import EtcPage04 from '@/spa/pages/etc/EtcPage04';

export default [
  {
    path: '/etc/posts',
    name: 'EtcPage',
    component: EtcPage,
  },
  {
    path: '/etc/posts/1',
    component: EtcPage01,
  },
  {
    path: '/etc/posts/2',
    component: EtcPage02,
  },
  {
    path: '/etc/posts/3',
    component: EtcPage03,
  },
  {
    path: '/etc/posts/4',
    component: EtcPage04,
  },
];
