<template>
  <router-link :to="{ name: 'MainPage' }" tag="div" class="logo-wrap">
    <h1>{{ title }}</h1>
  </router-link>
</template>


<script>
export default {
  name: 'Logo',
  data() {
    return {
      title: 'heecheolman',
    };
  },
};
</script>
