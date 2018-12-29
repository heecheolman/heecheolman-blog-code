<template>
  <div class="left-side-bar-wrap">
    <logo />
    <profile />
    <category />
    <contact />
  </div>
</template>
<script>
import Logo from '@/shared-components/Logo';
import Profile from '@/spa/components/profile/Profile';
import Category from '@/spa/components/category/Category';
import Contact from '@/spa/components/contact/Contact';

export default {
  name: 'LeftSidebar',
  components: {
    Logo,
    Profile,
    Category,
    Contact,
  },
};
</script>
