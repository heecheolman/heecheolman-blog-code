<template>
  <div class="nav-wrap flex-container flex-between-sort flex-row">
    <left-tooltip />
    <logo />
    <div class="empty"></div>
  </div>
</template>


<script>
import Logo from '@/shared-components/Logo';
import LeftTooltip from './left-tooltip/LeftTooltip';


export default {
  name: 'TopNav',
  components: {
    LeftTooltip,
    Logo,
  },
};
</script>


<style lang="sass" scoped>
  @media screen and (max-width: 425px)
    .main-wrap .nav-wrap
      display: flex
      visibility: visible
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .main-wrap .nav-wrap
      display: flex
      visibility: visible
  @media screen and (min-width: 1025px)
    .main-wrap .nav-wrap
      display: none
      visibility: hidden

  .nav-wrap
    z-index: 2000
    position: fixed
    width: 100%
    height: 50px
    display: none
    visibility: hidden
    background: rgba(255, 255, 255, 1)
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    .empty
      width: 50px
      height: 50px
      background: transparent
</style>
