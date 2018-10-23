<template>
  <div class="left-tooltip-wrap flex-container flex-center-sort" @click="showMenu">
    <div class="left-tooltip-button">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
    </div>
  </div>
</template>


<script>
import Eventbus from './../../../../lib/Eventbus';

export default {
  name: 'LeftTooltip',
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
    showMenu() {
      Eventbus.$emit('sidebarToggle');
    },
  },
};
</script>


<style lang="sass" scoped>
  .left-tooltip-wrap
    width: 50px
    height: 50px
    .left-tooltip-button
      width: 1.25rem
      height: 1.25rem
      position: absolute
      color: #5b5777
      cursor: pointer
</style>
