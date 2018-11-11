<template>
  <div class="md-section">
    <post :md="md"/>
  </div>
</template>


<script>
import MarkDown from '@/assets/posts/what/4/post.md';
import Post from '../../components/post/Post';

export default {
  name: 'WhatPage04',
  components: {
    Post,
  },
  data() {
    return {
      md: MarkDown,
    };
  },
};
</script>
