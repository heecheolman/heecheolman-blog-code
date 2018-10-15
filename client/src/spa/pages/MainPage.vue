<template>
  <div class="contents">
    <div class="contents__body">
      <post :md="intro"/>
    </div>
  </div>
</template>


<script>
import Post from './../components/post/Post';
import IntroMarkDown from '../../assets/md/intro.md';

export default {
  name: 'MainPage',
  components: {
    Post,
  },
  data() {
    return {
      intro: IntroMarkDown,
    };
  },
};
</script>


<style lang="sass" scoped>
  .contents
    width: 100%
    height: 100%
    flex: 7
    .contents__body
      max-width: 1080px
      min-width: 800px
      padding: 40px
</style>
