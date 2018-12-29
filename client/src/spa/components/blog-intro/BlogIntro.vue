<template>
  <div class="blog-intro-section">
    <div class="blog-group--header">{{ title }}</div>
    <div class="blog-group--txt">
      {{ intro }}
    </div>
  </div>
</template>


<script>
import IntroData from './IntroText';

export default {
  name: 'BlogIntro',
  data() {
    return {
      title: IntroData.title,
      intro: IntroData.intro,
    };
  },
};
</script>
