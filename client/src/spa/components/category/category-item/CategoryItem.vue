<template>
  <div class="category-list" @click="routing">
    <div class="category-list__li">
      <span class="category-list__li-text">{{ name }}</span>
    </div>
  </div>
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
    md: {
      type: Object,
    },
  },
  methods: {
    routing() {
      this.$router.push({ path: this.route });
      Eventbus.$emit('sidebarOff');
    },
  },
};
</script>

<style lang="sass" scoped>
  .category-list
    width: 100%
    height: 40px
    margin: 10px 0
    text-align: left
  .category-list__li
    width: 100%
    height: 100%
    border-left: 2px solid #d7d7d7
    padding: 12px 0 12px 24px
    transition: 0.3s ease-out
    cursor: pointer
  .category-list__li:hover
    transform: translate(5px, 0)
    border-left: 3px solid #4257f2
    .category-list__li-text
      color: #4257f2


  .category-list__li-text
    font-size: 18px
    color: #2c3e50
</style>
