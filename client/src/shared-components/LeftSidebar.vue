<template>
  <div class="left-side-bar-wrap">
    <profile />
    <category />
    <contact />
  </div>
</template>
<script>
import Profile from '../spa/components/profile/Profile';
import Category from '../spa/components/category/Category';
import Contact from '../spa/components/contact/Contact';

export default {
  name: 'LeftSidebar',
  components: {
    Profile,
    Category,
    Contact,
  },
};
</script>
<style lang="sass" scoped>
  .left-side-bar-wrap
    width: 100%
    height: 100%
    flex: 3
    min-width: 300px
    max-width: 400px
    border-right: 1px solid rgba(44, 62, 80, 0.2)
    overflow-y: scroll
</style>
