<template>
  <router-link class="card-wrap"
               tag="div"
               :to="{ path: route }">
    <div class="card">
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-robot">{{ robot }}</p>
    </div>
  </router-link>
</template>


<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
    },
    robot: {
      type: String,
    },
    route: {
      type: String,
    },
  },
};
</script>


<style lang="sass" scoped>
  @media screen and (max-width: 425px)
    .card-wrap
      max-width: 100%
      width: 100%
      .card
        max-width: 100%
        width: 100%
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .card-wrap
      max-width: 100%
      width: 100%
      .card
        max-width: 100%
        width: 100%
  @media screen and (min-width: 1025px)
    .card-wrap
      width: 50%
      .card
        max-width: 70%
        width: 100%


  .card-wrap
    justify-content: center
    display: flex
    align-items: center
    margin-left: 0
    .card
      cursor: pointer
      display: block
      border-radius: 8px
      width: 100%
      height: 100px
      margin: 15px 15px 30px 15px
      box-shadow: 0 4px 25px 0 rgba(0,0,0,.1)
      transition: 0.2s ease-in-out
      .card-title
        width: 100%
        font-weight: normal
        text-align: center
        font-size: 1.3rem
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        color: #4257f2
      .card-robot
        width: 100%
        padding: 0 20px
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        line-height: 200%
        text-align: justify
        font-size: 0.8rem
    .card:hover
      transform: translate(0, -4px)
</style>
