<template>
  <div class="page flex-container">
    <div class="page-wrap">
      <list v-for="(post, index) in posts"
            :key="index" :title="post.title" :route="post.route"/>
    </div>
  </div>
</template>


<script>
import PostListDef from '@/assets/posts/vue/PostList';
import List from '@/spa/components/post-list/list/List';

import Eventbus from './../../lib/Eventbus';

export default {
  name: 'VuePage',
  components: {
    // FlexArrow,
    List,
  },
  created() {
    Eventbus.$on('listSectionToggle', this.listSectionToggle);
    Eventbus.$on('listSectionOff', this.listSectionOff);
  },
  computed: {
    isOpen() {
      return this.opened;
    },
  },
  data() {
    return {
      posts: PostListDef,
      opened: false,
    };
  },
  methods: {
    listSectionToggle() {
      this.opened = !this.opened;
    },
    listSectionOff() {
      this.opened = false;
    },
  },
};
</script>
