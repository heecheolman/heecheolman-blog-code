<template>
  <div class="profile-wrap flex-container flex-column">
    <div class="profile-wrap__img-wrap flex-container flex-center-sort">
      <!--<img class="profile-wrap__img-wrap__img" :src="image" alt="profile">-->
      <div class="profile-wrap__img-wrap__img"></div>
    </div>
    <div class="profile-wrap__text-wrap flex-container flex-center-sort">
      <div class="profile-wrap__text-wrap__text"></div>
    </div>
  </div>
</template>
<script>
import ProfileImage from './../assets/images/profile.jpeg';

export default {
  name: 'Profile',
  data() {
    return {
      image: ProfileImage,
    };
  },
};
</script>
<style lang="sass" scoped>
  .profile-wrap
    width: 100%
    height: auto
  .profile-wrap__img-wrap
    width: 300px
    height: 300px
  .profile-wrap__img-wrap__img
    width: 280px
    height: 280px
    border-radius: 5px
    border: 1px solid rgba(44, 62, 80, 0.34)
  .profile-wrap__text-wrap
    width: 300px
    height: 70px
  .profile-wrap__text-wrap__text
    width: 280px
    height: 50px
    border-radius: 5px
    border: 1px solid rgba(44, 62, 80, 0.34)
</style>
