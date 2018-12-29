<template>
  <div class="page contents">
    <blog-intro />
    <card-section />
    <spec-section />
  </div>
</template>


<script>
import BlogIntro from '../components/blog-intro/BlogIntro';
import CardSection from './../components/card/CardSection';
import SpecSection from './../components/spec/Spec';

export default {
  name: 'MainPage',
  components: {
    BlogIntro,
    CardSection,
    SpecSection,
  },
};
</script>
