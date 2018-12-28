<template>
  <div class="page contents">
    <page-intro />
    <card-section />
    <spec-section />
  </div>
</template>


<script>
import PageIntro from './../components/page-intro/PageIntro';
import CardSection from './../components/card/CardSection';
import SpecSection from './../components/spec/Spec';

export default {
  name: 'MainPage',
  components: {
    PageIntro,
    CardSection,
    SpecSection,
  },
};
</script>
