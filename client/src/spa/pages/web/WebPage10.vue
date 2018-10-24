<template>
  <div class="md-section">
    <post :md="md"/>
  </div>
</template>


<script>
import MarkDown from '@/assets/posts/web/10/post.md';
import Post from './../../components/post/Post';

export default {
  name: 'WebPageIntro',
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
