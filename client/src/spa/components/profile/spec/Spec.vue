<template>
  <div class="spec-wrap">
    <div class="spec-section">
      <div class="spec-header">Strong</div>
      <div class="spec-body">

        <tag v-for="(tag, index) in strongTagList"
          :key="index" :title="tag.title"/>

      </div>
    </div>
    <div class="spec-section">
      <div class="spec-header">Knowledgeable</div>
      <div class="spec-body">

        <tag v-for="(tag, index) in knowTagList"
          :key="index" :title="tag.title"/>

      </div>
    </div>
  </div>
</template>


<script>
import Tag from './tag/Tag';

export default {
  name: 'Spec',
  components: {
    Tag,
  },
  data() {
    return {
      strongTagList: [
        { title: 'HTML' },
        { title: 'Javascript' },
        { title: 'CSS' },
      ],
      knowTagList: [
        { title: 'Java' },
        { title: 'C++' },
        { title: 'C' },
        { title: 'Node.js' },
        { title: 'Webpack' },
        { title: 'Vue' },
        { title: 'NPM' },
        { title: 'Git' },
      ],
    };
  },
};
</script>


<style lang="sass" scoped>
  .spec-wrap
    width: 90%
    height: auto
    .spec-section
      width: 100%
      height: auto
      margin-bottom: 30px
      .spec-header
        width: 100%
        height: 30px
        margin-bottom: 5px
        line-height: 30px
        text-align: center
        font-size: 16px
        font-weight: 500
        color: #4257f2
</style>
