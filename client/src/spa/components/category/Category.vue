<template>
  <div class="category-wrap flex-container flex-center-sort">
    <div class="category-wrap__list-wrap">

      <category-item v-for="(item, index) in categories"
        :key="index" :name="item.name" :route="item.route"/>

    </div>
  </div>
</template>


<script>
import CategoryItem from './category-item/CategoryItem';
import CategoryFiledDef from './CategoryFiledDef';

export default {
  name: 'Category',
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: CategoryFiledDef,
    };
  },
};
</script>


<style lang="sass" scoped>
  .category-wrap
    width: 100%
    height: auto
  .category-wrap__list-wrap
    width: 90%
    height: auto
</style>
