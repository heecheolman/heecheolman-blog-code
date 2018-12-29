<template>
  <div class="mob-left-side-bar-mask" :class="{ 'side-bar-open': foldStatus }">
    <div class="mob-left-side-bar">
      <profile />
      <category />
      <contact />
    </div>
  </div>
</template>


<script>
import Eventbus from './../lib/Eventbus';
import Profile from './../spa/components/profile/Profile';
import Category from './../spa/components/category/Category';
import Contact from './../spa/components/contact/Contact';

export default {
  name: 'MobileLeftSideBar',
  components: {
    Profile,
    Category,
    Contact,
  },
  created() {
    Eventbus.$on('sidebarOff', this.sidebarOff);
    Eventbus.$on('sidebarToggle', this.sidebarToggle);
  },
  computed: {
    foldStatus() {
      return this.fold;
    },
  },
  data() {
    return {
      fold: false,
    };
  },
  methods: {
    sidebarToggle() {
      this.fold = !this.fold;
    },
    sidebarOff() {
      this.fold = false;
    },
  },
};
</script>
