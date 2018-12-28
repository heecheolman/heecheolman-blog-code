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
