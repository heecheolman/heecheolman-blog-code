<template>
  <div class="category-wrap flex-container flex-center-sort">
    <div class="category-list-wrap">

      <category-item v-for="(item, index) in categories"
                     :key="index"
                     :name="item.name"
                     :route="item.route"
                     :posts="item.posts"/>

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
