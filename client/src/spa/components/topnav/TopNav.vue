<template>
  <div class="nav-wrap flex-container flex-between-sort flex-row">
    <left-tooltip />
  </div>
</template>


<script>
import LeftTooltip from './left-tooltip/LeftTooltip';

export default {
  name: 'TopNav',
  components: {
    LeftTooltip,
  },
};
</script>


<style lang="sass" scoped>
  @media screen and (max-width: 425px)
    .main-wrap .nav-wrap
      display: block
      visibility: visible
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .main-wrap .nav-wrap
      display: block
      visibility: visible
  @media screen and (min-width: 1025px)
    .main-wrap .nav-wrap
      display: none
      visibility: hidden

  .nav-wrap
    width: 100%
    height: 50px
    display: none
    visibility: hidden
    border-bottom: 1px solid #d7d7d7
    background: rgba(255, 255, 255, 1)
</style>
