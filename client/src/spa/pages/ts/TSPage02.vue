<template>
  <div class="md-section">
    <post :md="md" />
  </div>
</template>


<script>
import MarkDown from '@/assets/posts/ts/2/post.md';
import Post from '../../components/post/Post';

export default {
  name: 'TSPage02',
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
