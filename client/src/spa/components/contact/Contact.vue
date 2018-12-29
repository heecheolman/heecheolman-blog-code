<template>
  <div class="contact-wrap">
    <div class="contact-header">{{ name }}</div>
    <ul class="contact-ul">
      <li><a class="contact-link" href="https://github.com/heecheolman">@ github</a></li>
      <li><a class="contact-link" href="https://www.facebook.com/profile.php?id=100006997631031">@ facebook</a></li>
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
