/* What Category */

import WhatPage from '@/spa/pages/WhatPage';
import WhatPage01 from '@/spa/pages/what/WhatPage01';
import WhatPage02 from '@/spa/pages/what/WhatPage02';
import WhatPage03 from '@/spa/pages/what/WhatPage03';
import WhatPage04 from '@/spa/pages/what/WhatPage04';
import WhatPage05 from '@/spa/pages/what/WhatPage05';
import WhatPage06 from '@/spa/pages/what/WhatPage06';
import WhatPage07 from '@/spa/pages/what/WhatPage07';
import WhatPage08 from '@/spa/pages/what/WhatPage08';

export default [
  {
    path: '/what/posts',
    name: 'WhatPage',
    component: WhatPage,
  },
  {
    path: '/what/posts/1',
    component: WhatPage01,
  },
  {
    path: '/what/posts/2',
    component: WhatPage02,
  },
  {
    path: '/what/posts/3',
    component: WhatPage03,
  },
  {
    path: '/what/posts/4',
    component: WhatPage04,
  },
  {
    path: '/what/posts/5',
    component: WhatPage05,
  },
  {
    path: '/what/posts/6',
    component: WhatPage06,
  },
  {
    path: '/what/posts/7',
    component: WhatPage07,
  },
  {
    path: '/what/posts/8',
    component: WhatPage08,
  },
];
