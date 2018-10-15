<template>
  <div id="app">
    <div class="main-wrap flex-container flex-center-sort flex-row">
      <left-sidebar />
      <router-view/>
    </div>
  </div>
</template>


<script>
import LeftSidebar from './shared-components/LeftSidebar';

export default {
  name: 'App',
  components: {
    LeftSidebar,
  },
};
</script>


<style lang="sass">
  @import './assets/css/common.sass'
  @import './assets/css/layout.sass'
  @import '~github-markdown-css'
  .main-wrap
    width: 100%
    height: 100vh
</style>
