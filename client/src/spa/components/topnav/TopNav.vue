<template>
  <div class="top-nav-wrap flex-container flex-between-sort flex-row">
    <left-tooltip />
    <logo />
    <div class="empty"></div>
  </div>
</template>


<script>
import Logo from '@/shared-components/Logo';
import LeftTooltip from './left-tooltip/LeftTooltip';


export default {
  name: 'TopNav',
  components: {
    LeftTooltip,
    Logo,
  },
};
</script>
