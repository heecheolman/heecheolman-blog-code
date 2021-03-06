// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias
import 'highlight.js/styles/github-gist.css';

import Vue from 'vue';
import App from './App';
import router from './config/router';

import './assets/scss/main.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
