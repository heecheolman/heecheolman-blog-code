<template>
  <div class="left-side-bar-wrap"
       :class="{ 'fold-active': getFoldState }">
    <profile />
    <category />
    <contact />
  </div>
</template>
<script>
import Profile from '@/spa/components/profile/Profile';
import Category from '@/spa/components/category/Category';
import Contact from '@/spa/components/contact/Contact';

export default {
  name: 'LeftSidebar',
  components: {
    Profile,
    Category,
    Contact,
  },
  computed: {
    getFoldState() {
      return this.foldState;
    },
  },
  data() {
    return {
      foldState: false,
    };
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


  /*@media screen and (min-width: 1025px)*/


  .left-side-bar-wrap
    max-width: 400px
    min-width: 300px
    height: 100%
    transition: 0.2s ease-in-out
    overflow-y: scroll
    opacity: 1

  .fold-active
    width: 0

</style>
