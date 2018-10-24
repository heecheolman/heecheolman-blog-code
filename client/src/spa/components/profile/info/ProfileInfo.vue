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
      intro: '배우는것을 좋아하기 때문에 계속해서 \'나\'를 발전시키고 싶습니다. 또한 사람과 이야기하는것을 좋아합니다.',
    };
  },
};
</script>


<style lang="sass" scoped>
  @import './../../../../assets/sass/utils/variables'
  .profile-info-wrap
    width: 150px
    height: 140px
    .info-header-wrap
      width: 100%
      height: 30px
      line-height: 30px
      text-align: left
      .info-text--header
        font-weight: 500
        font-size: 16px
        color: $major-color
    .info-body-wrap
      width: 100%
      height: 70px
      .info-text--body
        text-align: justify
        font-size: 12px
        color: rgba(44, 62, 80, 0.73)
</style>
