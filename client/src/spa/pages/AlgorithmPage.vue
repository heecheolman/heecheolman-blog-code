<template>
  <div class="page flex-container flex-column">

    <page-intro
      :title="introData.title"
      :text="introData.text" />

    <div class="blog-group--header">
      포스트들 📚
    </div>

    <div class="list-container">

      <post-list v-for="(post, index) in posts"
                 :key="index"
                 :title="post.title"
                 :robot="post.robot"
                 :route="post.route"/>

    </div>

  </div>
</template>


<script>
import IntroData from '@/assets/posts/algorithm/intro/IntroData';
import PostListDef from '@/assets/posts/algorithm/PostList';
import PageIntro from '@/spa/components/page-intro/PageIntro';
import PostList from '@/spa/components/post-list/PostList';

export default {
  name: 'AlgorithmPage',
  components: {
    PageIntro,
    PostList,
  },
  data() {
    return {
      introData: IntroData,
      posts: PostListDef,
    };
  },
};
</script>
