<template>
  <router-link :to="{ path: this.route, params: { lists: posts, }}"
               tag="div"
               class="category-list">

    <div class="li" @click="sidebarOff">
      <span class="li-text">{{ name }}</span>
    </div>

  </router-link>
</template>


<script>
import Eventbus from './../../../../lib/Eventbus';

export default {
  name: 'CategoryList',
  props: {
    name: {
      type: String,
    },
    route: {
      type: String,
    },
    posts: {
      type: Array,
    },
  },
  methods: {
    sidebarOff() {
      Eventbus.$emit('sidebarOff');
    },
  },
};
</script>
