<template>
  <div class="main-intro-section">
    <div class="main-group--header">{{ title }}</div>
    <div class="main-group--txt">
      {{ intro }}
    </div>
  </div>
</template>


<script>
import IntroData from './IntroText';

export default {
  name: 'PageIntro',
  data() {
    return {
      title: IntroData.title,
      intro: IntroData.intro,
    };
  },
};
</script>
