<template>
  <div class="flex-arrow-wrap">
    <a class="arrow-icon" :class="{ 'close': !isOpen }" @click="toggleList">
      <span class="top-bar"></span>
      <span class="bottom-bar"></span>
    </a>
  </div>
</template>


<script>
import Eventbus from '../lib/Eventbus';

export default {
  name: 'FlexArrow',
  computed: {
    isOpen() {
      return this.opened;
    },
  },
  created() {
    Eventbus.$on('closeList', this.closeList);
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    toggleList() {
      this.opened = !this.opened;
      Eventbus.$emit('listSectionToggle');
    },
    closeList() {
      this.opened = false;
    },
  },
};
</script>


<style lang="sass" scoped>
  @import './../assets/sass/utils/variables'

  @media screen and (min-width: 1025px)
    .flex-arrow-wrap
      display: none
      visibility: hidden

  $background: transparent
  $easing: cubic-bezier(.25,1.7,.35,.8)
  $duration: 0.5s
  $arrow-color: $major-color
  $arrow-width: 15px
  $arrow-height: 4px

  .flex-arrow-wrap
    position: fixed
    top: 15px
    right: 0
    z-index: 2100
    .arrow-icon
      background-color: $background
      height: 2.8em
      width: 2.8em
      display: block
      padding: 0.5em
      position: relative
      cursor: pointer
      border-radius: 4px

    .top-bar
      position: absolute
      background-color: transparent
      top: 0
      left: 0
      width: $arrow-width
      height: $arrow-height
      display: block
      transform: rotate(60deg)
      float: right
      border-radius: 2px
      &:after
        content: ""
        background-color: $arrow-color
        width: $arrow-width
        height: $arrow-height
        display: block
        float: right
        border-radius: 8px 10px 10px 8px
        transition: all $duration $easing
        z-index: -1
    .bottom-bar
      position: absolute
      background-color: transparent
      top: 10px
      left: 2px
      width: $arrow-width
      height: 8px
      display: block
      transform: rotate(-60deg)
      float: right
      border-radius: 2px
      &:after
        content: ""
        background-color: $arrow-color
        width: $arrow-width
        height: $arrow-height
        display: block
        float: right
        border-radius: 10px 8px 8px 10px
        transition: all $duration $easing
        z-index: -1

  .close
    .top-bar:after
      transform: rotate(60deg)
    .bottom-bar:after
      transform: rotate(-60deg)
</style>
