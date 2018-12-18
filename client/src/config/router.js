import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/spa/pages/MainPage';


/* Javascript Category */
import JSPage from '@/spa/pages/JavascriptPage';
import JSPageIntro from '@/spa/pages/js/JSPageIntro';
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


/* Vue Category */
import VuePage from '@/spa/pages/VuePage';
import VuePageIntro from '@/spa/pages/vue/VuePageIntro';
import VuePage01 from '@/spa/pages/vue/VuePage01';
import VuePage02 from '@/spa/pages/vue/VuePage02';
import VuePage03 from '@/spa/pages/vue/VuePage03';


/* Git Category */
import GitPage from '@/spa/pages/GitPage';
import GitPageIntro from '@/spa/pages/git/GitPageIntro';
import GitPage01 from '@/spa/pages/git/GitPage01';
import GitPage02 from '@/spa/pages/git/GitPage02';


/* Work Category */
import WorkPage from '@/spa/pages/WorkPage';
import WorkPageIntro from '@/spa/pages/work/WorkPageIntro';
import WorkPage01 from '@/spa/pages/work/WorkPage01';
import WorkPage02 from '@/spa/pages/work/WorkPage02';
import WorkPage03 from '@/spa/pages/work/WorkPage03';
import WorkPage04 from '@/spa/pages/work/WorkPage04';


/* Algorithm Category */
import AlgorithmPage from '@/spa/pages/AlgorithmPage';
import AlgorithmPageIntro from '@/spa/pages/algorithm/AlgorithmPageIntro';


/* etc Category */
import EtcPage from '@/spa/pages/EtcPage';
import EtcPageIntro from '@/spa/pages/etc/EtcPageIntro';
import EtcPage01 from '@/spa/pages/etc/EtcPage01';
import EtcPage02 from '@/spa/pages/etc/EtcPage02';
import EtcPage03 from '@/spa/pages/etc/EtcPage03';
import EtcPage04 from '@/spa/pages/etc/EtcPage04';

/* What Category */
import WhatPage from '@/spa/pages/WhatPage';
import WhatPageIntro from '@/spa/pages/what/WhatPageIntro';
import WhatPage01 from '@/spa/pages/what/WhatPage01';
import WhatPage02 from '@/spa/pages/what/WhatPage02';
import WhatPage03 from '@/spa/pages/what/WhatPage03';
import WhatPage04 from '@/spa/pages/what/WhatPage04';
import WhatPage05 from '@/spa/pages/what/WhatPage05';
import WhatPage06 from '@/spa/pages/what/WhatPage06';
import WhatPage07 from '@/spa/pages/what/WhatPage07';
import WhatPage08 from '@/spa/pages/what/WhatPage08';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/js/posts',
      name: 'JavascriptPage',
      component: JSPage,
      children: [
        {
          path: 'intro',
          component: JSPageIntro,
        },
        {
          path: '1',
          component: JSPage01,
        },
        {
          path: '2',
          component: JSPage02,
        },
        {
          path: '3',
          component: JSPage03,
        },
        {
          path: '4',
          component: JSPage04,
        },
        {
          path: '5',
          component: JSPage05,
        },
        {
          path: '6',
          component: JSPage06,
        },
        {
          path: '7',
          component: JSPage07,
        },
        {
          path: '8',
          component: JSPage08,
        },
        {
          path: '9',
          component: JSPage09,
        },
        {
          path: '10',
          component: JSPage10,
        },
      ],
    },
    {
      path: '/vue/posts',
      name: 'VuePage',
      component: VuePage,
      children: [
        {
          path: 'intro',
          component: VuePageIntro,
        },
        {
          path: '1',
          component: VuePage01,
        },
        {
          path: '2',
          component: VuePage02,
        },
        {
          path: '3',
          component: VuePage03,
        },
      ],
    },
    {
      path: '/git/posts',
      name: 'GitPage',
      component: GitPage,
      children: [
        {
          path: 'intro',
          component: GitPageIntro,
        },
        {
          path: '1',
          component: GitPage01,
        },
        {
          path: '2',
          component: GitPage02,
        },
      ],
    },
    {
      path: '/work/posts',
      name: 'WorkPage',
      component: WorkPage,
      children: [
        {
          path: 'intro',
          component: WorkPageIntro,
        },
        {
          path: '1',
          component: WorkPage01,
        },
        {
          path: '2',
          component: WorkPage02,
        },
        {
          path: '3',
          component: WorkPage03,
        },
        {
          path: '4',
          component: WorkPage04,
        },
      ],
    },
    {
      path: '/algorithm/posts',
      name: 'AlgorithmPage',
      component: AlgorithmPage,
      children: [
        {
          path: 'intro',
          component: AlgorithmPageIntro,
        },
      ],
    },
    {
      path: '/etc/posts',
      name: 'EtcPage',
      component: EtcPage,
      children: [
        {
          path: 'intro',
          component: EtcPageIntro,
        },
        {
          path: '1',
          component: EtcPage01,
        },
        {
          path: '2',
          component: EtcPage02,
        },
        {
          path: '3',
          component: EtcPage03,
        },
        {
          path: '4',
          component: EtcPage04,
        },
      ],
    },
    {
      path: '/what/posts',
      name: 'WhatPage',
      component: WhatPage,
      children: [
        {
          path: 'intro',
          component: WhatPageIntro,
        },
        {
          path: '1',
          component: WhatPage01,
        },
        {
          path: '2',
          component: WhatPage02,
        },
        {
          path: '3',
          component: WhatPage03,
        },
        {
          path: '4',
          component: WhatPage04,
        },
        {
          path: '5',
          component: WhatPage05,
        },
        {
          path: '6',
          component: WhatPage06,
        },
        {
          path: '7',
          component: WhatPage07,
        },
        {
          path: '8',
          component: WhatPage08,
        },
      ],
    },
  ],
});
