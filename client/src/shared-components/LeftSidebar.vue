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
<style lang="sass" scoped>
  @media screen and (max-width: 425px)
    .left-side-bar-wrap
      display: none
      visibility: hidden


  @media screen and (min-width: 426px) and (max-width: 1024px)
    .left-side-bar-wrap
      display: none
      visibility: hidden

  .left-side-bar-wrap
    padding-top: 20px
    max-width: 400px
    min-width: 300px
    background: transparent
    height: 100%
    transition: 0.2s ease-in-out
    border-right: 1px solid rgba(215, 215, 215, 0.4)
    overflow-y: scroll
    opacity: 1

</style>
