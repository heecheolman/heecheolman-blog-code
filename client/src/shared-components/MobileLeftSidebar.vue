<template>
  <div class="mob-left-side-bar-mask" :class="{ 'side-bar-open': foldStatus }">
    <div class="mob-left-side-bar">
      <profile />
      <category />
      <contact />
    </div>
  </div>
</template>


<script>
import Eventbus from './../lib/Eventbus';
import Profile from './../spa/components/profile/Profile';
import Category from './../spa/components/category/Category';
import Contact from './../spa/components/contact/Contact';

export default {
  name: 'MobileLeftSideBar',
  components: {
    Profile,
    Category,
    Contact,
  },
  created() {
    Eventbus.$on('sidebarOff', this.sidebarOff);
    Eventbus.$on('sidebarToggle', this.sidebarToggle);
  },
  computed: {
    foldStatus() {
      return this.fold;
    },
  },
  data() {
    return {
      fold: false,
    };
  },
  methods: {
    sidebarToggle() {
      this.fold = !this.fold;
    },
    sidebarOff() {
      this.fold = false;
    },
  },
};
</script>


<style lang="sass" scoped>
  $mob-sidebar-width: 280px

  @media screen and (max-width: 425px)
    .mob-left-side-bar-mask
      display: block
      visibility: visible
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .mob-left-side-bar-mask
      display: block
      visibility: visible
  @media screen and (min-width: 1025px)
    .mob-left-side-bar-mask
      display: none
      visibility: hidden

  .mob-left-side-bar-mask
    position: fixed
    transform: translate(-$mob-sidebar-width)
    margin-top: 50px
    transition: 0.3s ease-in-out
    width: $mob-sidebar-width
    height: 100%
    background: rgba(255, 255, 255, 1)
    z-index: 1010
  .mob-left-side-bar
    width: 100%
    height: calc(100% - 60px)
    overflow-y: scroll
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  .side-bar-open
    transform: translate(0px)
</style>
