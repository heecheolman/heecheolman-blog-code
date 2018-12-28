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
