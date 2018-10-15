<template>
  <div class="profile-info-wrap flex-container flex-center-sort flex-column">
    <div class="info-header-wrap">
      <span class="info-text--header">{{ name }}</span>
    </div>
    <div class="info-body-wrap">
      <p class="info-text--body">{{ intro }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ProfileInfo',
  data() {
    return {
      name: '김희철',
      intro: '안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요',
    };
  },
};
</script>


<style lang="sass" scoped>
  .profile-info-wrap
    width: 180px
    height: 140px
    padding: 10px
    .info-header-wrap
      width: 100%
      height: 30px
      line-height: 30px
      text-align: left
      .info-text--header
        font-weight: 500
        font-size: 16px
        color: #4257f2
    .info-body-wrap
      width: 100%
      height: 70px
      .info-text--body
        font-size: 12px
        color: rgba(44, 62, 80, 0.73)
</style>
