<template>
  <div class="spec-wrap">
    <div class="spec-section">
      <div class="spec-header--base spec-header--main">
        Technical Skills 🛠
      </div>
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
        { title: 'Javascript : ES6' },
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
        { title: 'Sass' },
      ],
    };
  },
};
</script>


<style lang="sass" scoped>
  @import '../../../assets/sass/utils/variables'
  .spec-wrap
    padding: 0 8%
    height: auto
    .spec-section
      width: 100%
      height: auto
      margin-bottom: 30px
      .spec-header--base
        width: 100%
        height: 30px
        margin-bottom: 5px
        line-height: 30px
        color: $major-color
      .spec-header--main
        letter-spacing: 0.0125rem
        font-size: 1.4rem
        font-weight: bold
      .spec-header--sub
        letter-spacing: 0.0125rem
        font-size: 1.2rem
        font-weight: 500
</style>
