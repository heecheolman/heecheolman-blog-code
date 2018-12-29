<template>
  <div class="spec-wrap">
    <div class="spec-section">
      <div class="blog-group--header">Technical Skills 🛠</div>
      <div class="spec-header--base spec-header--sub">Strong</div>
      <div class="spec-body">

        <tag v-for="(tag, index) in strongTagList"
          :key="index" :title="tag.title"/>

      </div>
    </div>
    <div class="spec-section">
      <div class="spec-header--base spec-header--sub">Knowledgeable</div>
      <div class="spec-body">

        <tag v-for="(tag, index) in knowTagList"
          :key="index" :title="tag.title"/>

      </div>
    </div>
  </div>
</template>


<script>
import { strongTags, knowTags } from './SpecDef';
import Tag from './tag/Tag';

export default {
  name: 'Spec',
  components: {
    Tag,
  },
  data() {
    return {
      strongTagList: strongTags,
      knowTagList: knowTags,
    };
  },
};
</script>
