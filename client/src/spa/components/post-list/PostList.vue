<template>
  <router-link :to="{ path: route, params: { id: route }}"
               tag="div"
               class="list-wrap"
               exact>

    <div class="blog-post-header">
      {{ title }} 📖
    </div>

    <div class="blog-post-robot">
      {{ robot }}
    </div>

  </router-link>
</template>


<script>
export default {
  name: 'PostList',
  props: {
    title: {
      type: String,
    },
    robot: {
      type: String,
    },
    route: {
      type: String,
    },
  },
};
</script>
