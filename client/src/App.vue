<template>
  <div id="app">
    <sidebar />
    <router-view/>
  </div>
</template>


<script>
import Sidebar from './shared-components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>


<style lang="sass">
@import './assets/css/common.sass';
@import './assets/css/layout.sass';

</style>
