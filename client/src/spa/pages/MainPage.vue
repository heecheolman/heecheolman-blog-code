<template>
  <div class="page contents">
    <page-intro />
    <card-section />
  </div>
</template>


<script>
import PageIntro from './../components/page-intro/PageIntro';
import CardSection from './../components/card/CardSection';

export default {
  name: 'MainPage',
  components: {
    PageIntro,
    CardSection,
  },
};
</script>


<style lang="sass" scoped>
  .contents
    padding: 50px 20px 30px 20px
    overflow-y: scroll
</style>
