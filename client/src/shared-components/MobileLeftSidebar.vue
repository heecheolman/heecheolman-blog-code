<template>
  <div class="mob-left-side-bar-wrap" ref="sidebar" :class="{ 'side-bar-open': openState }">
  </div>
</template>


<script>
import Eventbus from './../lib/Eventbus';

export default {
  name: 'MobileLeftSideBar',
  created() {
    Eventbus.$on('sidebarToggle', this.sidebarToggle);
  },
  computed: {
    openState() {
      return this.open;
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    sidebarToggle() {
      this.open = !this.open;
    },
  },
};
</script>


<style lang="sass" scoped>
  $mob-sidebar-width: 200px
  @media screen and (max-width: 425px)
    .mob-left-side-bar-wrap
      display: block
      visibility: visible
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .mob-left-side-bar-wrap
      display: block
      visibility: visible
  @media screen and (min-width: 1025px)
    .mob-left-side-bar-wrap
      display: none
      visibility: hidden

  .mob-left-side-bar-wrap
    position: fixed
    transform: translate(-$mob-sidebar-width)
    transition: 0.3s
    width: $mob-sidebar-width
    height: 100%
    background: rgba(255, 255, 255, 1)

  .side-bar-open
    transform: translate(0px)
</style>
