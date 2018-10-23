<template>
  <div class="list-wrap">
    {{ title }}
    {{ robot }}
    <router-link :to="{ path: route, params:{ id: route }}">route</router-link>
  </div>
</template>


<script>
export default {
  name: 'List',
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


<style lang="sass" scoped>
  .list-wrap
    width: 100%
    height: 100px
    /*margin: 20px 0*/
    border-bottom: 1px solid #d7d7d7
    /*box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);*/
    /*background: rgba(255, 255, 255, 1)*/
</style>
