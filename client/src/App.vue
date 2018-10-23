<template>
  <div id="app">
    <div class="main-wrap">
      <top-nav />
      <div class="flex-container flex-row">
        <mobile-left-sidebar />
        <left-sidebar />
        <!--<a class="arrow-icon" :class="{ 'open': !folding }" @click="toggleArrow">-->
          <!--<span class="top-bar"></span>-->
          <!--<span class="bottom-bar"></span>-->
        <!--</a>-->
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>
import LeftSidebar from './shared-components/LeftSidebar';
import TopNav from './spa/components/topnav/TopNav';
import MobileLeftSidebar from './shared-components/MobileLeftSidebar';

export default {
  name: 'App',
  components: {
    LeftSidebar,
    TopNav,
    MobileLeftSidebar,
  },
  computed: {
    folding() {
      return this.foldState;
    },
  },
  data() {
    return {
      foldState: false,
    };
  },
  methods: {
    toggleArrow() {
      this.foldState = !this.foldState;
    },
  },
};
</script>


<style lang="sass">
  @import './assets/css/common.sass'
  @import './assets/css/layout.sass'
  @import '~github-markdown-css'
  .main-wrap
    width: 100%
    height: 100vh

  $background: transparent
  $easing: cubic-bezier(.25,1.7,.35,.8)
  $duration: 0.5s

  .arrow-icon
    background-color: $background
    top: 45%
    height: 2.8em
    width: 2.8em
    display: block
    padding: 0.5em
    margin: 1em auto
    position: relative
    cursor: pointer
    border-radius: 4px

  .top-bar
    position: absolute
    background-color: transparent
    top: 0
    left: 0
    width: 40px
    height: 10px
    display: block
    transform: rotate(-120deg)
    float: right
    border-radius: 2px
    &:after
      content: ""
      background-color: #4257f2
      width: 40px
      height: 10px
      display: block
      float: right
      border-radius: 6px 10px 10px 6px
      transition: all $duration $easing
      z-index: -1

  .bottom-bar
    position: absolute
    background-color: transparent
    top: 28px
    left: 0
    width: 40px
    height: 10px
    display: block
    transform: rotate(-60deg)
    float: right
    border-radius: 2px
    &:after
      content: ""
      background-color: #4257f2
      width: 40px
      height: 10px
      display: block
      float: right
      border-radius: 10px 6px 6px 10px
      transition: all $duration $easing
      z-index: -1

  .open
    .top-bar:after
      transform-origin: center center
      transform: rotate(60deg)
    .bottom-bar:after
      transform-origin: center center
      transform: rotate(-60deg)

  .slide-fade-enter-active
    transition: all .3s ease
  .slide-fade-leave-active
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(-300px)
  /*transform: translateX(-300px)*/
</style>
