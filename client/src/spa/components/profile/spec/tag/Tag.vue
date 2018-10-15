<template>
  <div class="tag-wrap">
    {{ title }}
  </div>
</template>


<script>
export default {
  name: 'Tag',
  props: {
    title: {
      type: String,
    },
  },
};
</script>


<style lang="sass" scoped>
  .tag-wrap
    position: relative
    user-select: none
    display: inline-block
    margin: 2px 5px
    padding: 6px 10px
    text-align: center
    font-size: 12px
    font-weight: 400
    color: #2c3e50
    background: rgba(255, 255, 255, 0.4)
    border-radius: 20px
    border: 1px solid rgba(44, 62, 80, 0.1)
</style>
