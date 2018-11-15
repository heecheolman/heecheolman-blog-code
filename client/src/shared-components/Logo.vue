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


<style lang="sass" scoped>
  @import './../assets/sass/utils/variables'

  .logo-wrap
    width: auto
    height: 50px
    line-height: 50px
    h1
      color: $major-color
      margin: 0
      text-align: center
      font-size: 1.4rem
      letter-spacing: 0.0125rem
      user-select: none
      transition: 0.3s ease-in-out
      cursor: pointer
    h1:hover
      transform: translate(0, -2px)

</style>
