<template>
  <div class="markdown-body">
    <component :is="md"/>
  </div>
</template>


<script>
export default {
  name: 'Post',
  props: ['md'],
};
</script>


<style lang="sass" scoped>
</style>
