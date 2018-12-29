<template>
  <div class="page-intro-section">
    <div class="blog-group--header">
      {{ title }} 💎
    </div>
    <div class="blog-group--txt">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIntro',
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>
