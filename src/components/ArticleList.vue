<template>
  <transition-group tag="ul" name="item">

    <router-link v-for="article in articles"
      :key="article.id"
      :to="{ name: 'detail', params: { articleId: article.id } }">

      <article-list-item :article="article"></article-list-item>
    </router-link>

  </transition-group>
</template>

<script>
  import ArticleListItem from './ArticleListItem.vue';

  export default {
    name: 'article-list',
    components: {
      ArticleListItem
    },
    props: ['articles']
  };
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
  }
</style>
