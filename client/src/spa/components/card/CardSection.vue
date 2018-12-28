<template>
  <div class="card-section">
    <div class="main-group--header">
      새로운 포스트 🎉
    </div>
    <div class="card-group-row">
      <card v-for="(card, index) in postList1"
            :key="index"
            :title="card.title"
            :robot="card.robot"
            :route="card.route" />
    </div>
    <div class="card-group-row">
      <card v-for="(card, index) in postList2"
            :key="index"
            :title="card.title"
            :robot="card.robot"
            :route="card.route" />
    </div>
    <div class="card-group">
    </div>
  </div>
</template>


<script>
import Card from './card-item/Card';
import { postgroup1, postgroup2 } from './CurrentPostsDef';

export default {
  name: 'CardSection',
  components: {
    Card,
  },
  data() {
    return {
      postList1: postgroup1,
      postList2: postgroup2,
    };
  },
};
</script>


<style lang="sass" scoped>
  @media screen and (max-width: 425px)
    .card-section
      .card-group-row
        width: 100%
        flex-direction: column
  @media screen and (min-width: 426px) and (max-width: 1024px)
    .card-section
      width: 80%
      .card-group-row
        width: 100%
        flex-direction: column

  @media screen and (min-width: 1025px)
    .card-group-row
      flex-direction: row
  .card-section
    margin: 0 auto 30px
    max-width: 100%
    height: auto
    .card-group-row
      display: flex
      justify-content: center
      width: 100%
      .card-sub-section
        min-width: 250px
        max-width: 300px
        width: 300px
        height: 400px
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
</style>
