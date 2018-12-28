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
