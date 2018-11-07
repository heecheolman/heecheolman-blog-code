<template>
  <div class="page-intro-section">
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


<style lang="sass" scoped>
  @media screen and (max-width: 425px)
    .page-intro-section
        width: 100%
        .main-group--txt
          width: 100%
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .page-intro-section
      width: 80%
  .page-intro-section
    margin: 0 auto 30px
    max-width: 100%
    height: auto
</style>
