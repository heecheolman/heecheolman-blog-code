<template>
  <router-link class="card-wrap"
               tag="div"
               :to="{ path: route }">
    <div class="card">
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-robot">{{ robot }}</p>
    </div>
  </router-link>
</template>


<script>
export default {
  name: 'Card',
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
