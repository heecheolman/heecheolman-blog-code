<template>
  <router-link :to="{ path: route, params:{ id: route }}"
               class="list-wrap flex-container flex-column flex-center-sort"
               tag="div"
               exact>

    <div class="route-header flex-container flex-center-sort" @click="closingList">
      {{ title }}
    </div>

  </router-link>
</template>


<script>
import Eventbus from '../../../../lib/Eventbus';

export default {
  name: 'List',
  props: {
    title: {
      type: String,
    },
    route: {
      type: String,
    },
  },
  methods: {
    closingList() {
      Eventbus.$emit('listSectionOff');
      Eventbus.$emit('closeList');
    },
  },
};
</script>


<style lang="sass" scoped>
  @import './../../../../assets/sass/utils/variables'
  $list-color: #fff
  .router-link-active
    .route-header
      font-size: 1.0rem
      color: $major-color !important
      text-decoration: none

  .list-wrap
    position: relative
    display: inline-block
    margin: 14px 10px
    width: 90%
    height: 80px
    border-radius: 8px
    background: $list-color
    transition: all 0.3s cubic-bezier(.25,.8,.25,1)
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    cursor: pointer
    .route-header
      padding: 10px
      font-size: 1.0rem
      font-weight: normal
      color: #414141
      width: 100%
      text-align: center
      transition: 0.3s
    .route-header:hover
      transform: translate(0, -1px)
    .route-header:after
      content: ''
      position: absolute
      width: 0
      height: 0
      border-style: solid
      border-width: 10px 15px
      top: 50%
      margin-top: -10px
      border-color: transparent transparent transparent $list-color
      right: -25px
  .list-wrap:hover
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)


</style>
