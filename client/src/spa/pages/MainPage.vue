<template>
  <div class="contents">
    <post :md="intro"/>
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
    padding: 50px 10px 0
    width: 100%
    height: 100%
    flex: 7
</style>
