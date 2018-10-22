<template>
  <div class="markdown-body">
    <component :is="postData"/>
  </div>
</template>


<script>
export default {
  name: 'PostPipe',
  created() {
    this.postData = this.currentPostId;
  },
  data() {
    return {
      currentPostId: this.$route.params.id,
      currentPost: this.postData,
    };
  },
  computed: {
    postData: {
      get() {
        return () => import(`./../../../assets/posts/${this.currentPostId}/post.md`);
      },
      set(postId) {
        this.currentPost = () => import(`./../../../assets/posts/${postId}/post.md`);
      },
    },
  },
  watch: {
    $route: 'changePostData',
  },
  methods: {
    changePostData() {
      this.currentPostId = this.$route.params.id;
      this.postData = this.currentPostId;
    },
  },
};
</script>
