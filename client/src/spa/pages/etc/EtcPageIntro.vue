<template>
  <div class="md-section">
    <post :md="md"/>
  </div>
</template>


<script>
import MarkDown from '@/assets/posts/etc/intro/intro.md';
import Post from '../../components/post/Post';

export default {
  name: 'EtcPageIntro',
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
