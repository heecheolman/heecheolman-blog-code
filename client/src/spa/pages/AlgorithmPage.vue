<template>
  <div class="page flex-container">
    <div class="page-wrap">
      <router-view />
      <div class="md-list">
        <post-list :list="posts"/>
      </div>
    </div>
    <flex-arrow />
    <div class="mob-md-list-mask" :class="{ 'mask-open': isOpen }">
      <div class="mob-md-list" :class="{ 'md-list-open': isOpen }">
        <post-list :list="posts" />
      </div>
    </div>
  </div>
</template>


<script>
import PostListDef from '@/assets/posts/algorithm/PostList';
import PostList from '@/spa/components/post-list/PostList';
import FlexArrow from '@/shared-components/FlexArrow';

import Eventbus from './../../lib/Eventbus';

export default {
  name: 'AlgorithmPage',
  components: {
    PostList,
    FlexArrow,
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
