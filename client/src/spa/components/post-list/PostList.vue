<template>
  <div class="post-list-wrap">

    <list v-for="(post, index) in list"
      :key="index" :title="post.title" :robot="post.robot" :route="post.route"/>

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
    border-left: 1px solid rgba(44, 62, 80, 0.1)
    overflow-y: scroll
</style>
