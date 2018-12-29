<template>
  <div class="profile-wrap flex-container flex-column">
    <div class="img-container flex-container flex-around-sort flex-row">
      <div class="img-wrap flex-container flex-center-sort">
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
