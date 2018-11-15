<template>
  <div class="contact-wrap">
    <div class="contact-header">{{ name }}</div>
    <ul>
      <li><a href="https://github.com/heecheolman">Github</a></li>
      <li><a href="https://www.facebook.com/profile.php?id=100006997631031">Facebook</a></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: 'contact',
    };
  },
};
</script>


<style lang="sass" scoped>
  .contact-wrap
    width: 100%
    height: auto
    .contact-header
      width: 100%
      height: 30px
      line-height: 30px
      text-align: center
      font-size: 16px
      font-weight: 500
      color: #4257f2
    ul
      margin: 0
      list-style: none
      li
        margin: 10px 0
        padding-left: 20px
        border-left: 2px solid #d7d7d7
        cursor: pointer
        transition: 0.2s ease-out
        a
          font-size: 14px
          text-decoration: none
          letter-spacing: 0.0125rem
          color: #24292e
          a:visited
            color: #24292e
      li:hover
        color: #4257f2
        text-decoration: underline
        border-left: 2px solid #4257f2
</style>
