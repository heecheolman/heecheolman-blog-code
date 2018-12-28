<template>
  <div class="profile-wrap flex-container flex-column">
    <div class="profile-wrap__img-container flex-container flex-around-sort flex-row">
      <div class="profile-wrap__img-container__img-wrap flex-container flex-center-sort">
        <img class="profile-img" :src="image" alt="profile">
      </div>
      <profile-info />
    </div>
  </div>
</template>
<script>
import ProfileImage from '@/assets/images/profile.jpg';
import ProfileInfo from './info/ProfileInfo';

export default {
  name: 'Profile',
  components: {
    ProfileInfo,
  },
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
    .profile-wrap__img-container
      width: 100%
      height: 140px
      .profile-wrap__img-container__img-wrap
        width: 80px
        height: 80px
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
        border-radius: 100px
        overflow: hidden
        .profile-img
          padding-top: 10px
          width: 80px
          height: auto
</style>
