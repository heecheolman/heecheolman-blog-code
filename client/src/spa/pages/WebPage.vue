<template>
  <div class="page flex-container flex-row">
    <router-view />
    <div class="md-list">
      <post-list :list="posts"/>
    </div>
  </div>
</template>

<script>
import PostListDef from '@/assets/posts/web/PostList';
import PostList from './../components/post-list/PostList';

export default {
  name: 'WebPage',
  components: {
    PostList,
  },
  data() {
    return {
      posts: PostListDef,
    };
  },
};
</script>


<style lang="sass" scoped>
  @media screen and (max-width: 425px)
    .page
      .md-list
        display: none
        visibility: hidden
        background: rebeccapurple
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .page
      .md-list
        display: none
        visibility: hidden
  /*@media screen and (min-width: 1025px)*/


  .page
    width: 100%
    height: 100%
    .md-list
      position: relative
      width: 200px
      min-width: 200px
</style>
