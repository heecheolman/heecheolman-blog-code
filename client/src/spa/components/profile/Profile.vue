<template>
  <div class="profile-wrap flex-container flex-column">
    <div class="profile-wrap__img-container flex-container flex-around-sort flex-row">
      <div class="profile-wrap__img-container__img-wrap flex-container flex-center-sort"></div>
      <profile-info />
    </div>
    <div class="profile-wrap__spec-wrap flex-container flex-center-sort">
      <spec />
    </div>
  </div>
</template>
<script>
import ProfileImage from '../../../assets/images/profile.jpeg';
import ProfileInfo from './info/ProfileInfo';
import Spec from './spec/Spec';

export default {
  name: 'Profile',
  components: {
    ProfileInfo,
    Spec,
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
        width: 100px
        height: 100px
        border-radius: 100px
        overflow: hidden
        border: 1px solid rgba(44, 62, 80, 0.2)
    .profile-wrap__spec-wrap
      width: 100%
      height: auto
</style>
