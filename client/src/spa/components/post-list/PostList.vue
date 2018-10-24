<template>
  <div class="post-list-wrap">

    <list v-for="(post, index) in list"
      :key="index" :title="post.title" :route="post.route"/>

  </div>
</template>

<script>
import List from './list/List';

export default {
  name: 'PostList',
  props: {
    list: {
      type: Array,
    },
  },
  components: {
    List,
  },
};
</script>


<style lang="sass" scoped>
  .post-list-wrap
    width: 100%
    height: 100%
    overflow-y: scroll
    overflow-x: hidden
</style>
