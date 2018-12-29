<template>
  <div id="app">
    <div class="main-wrap">
      <top-nav />
      <div class="contents flex-container flex-row">
        <mobile-left-sidebar />
        <left-sidebar />
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>
import LeftSidebar from './shared-components/LeftSidebar';
import TopNav from './spa/components/topnav/TopNav';
import MobileLeftSidebar from './shared-components/MobileLeftSidebar';


export default {
  name: 'App',
  components: {
    LeftSidebar,
    TopNav,
    MobileLeftSidebar,
  },
};
</script>
