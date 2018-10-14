<template>
  <div class="side-bar-wrap">
    <profile />
    <category />
  </div>
</template>
<script>
import Profile from './Profile';
import Category from './Category';

export default {
  name: 'Sidebar',
  components: {
    Profile,
    Category,
  },
};
</script>
<style lang="sass" scoped>
  .side-bar-wrap
    position: absolute
    width: 300px
    height: 100%
    border-right: 1px solid rgba(44, 62, 80, 0.34)
</style>
