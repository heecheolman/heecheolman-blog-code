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

<style lang="sass">
  @import 'assets/sass/base/common'
  @import 'assets/sass/layout/flex'
  @import 'assets/sass/layout/page'
  @import '~github-markdown-css'

  @media screen and (max-width: 425px)
    .main-wrap .contents
      display: block
      visibility: visible
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .main-wrap .contents
      width: 100%

  .main-wrap
    width: 100%
    height: 100vh
  .slide-fade-enter-active
    transition: all .3s ease
  .slide-fade-leave-active
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(-300px)
</style>
