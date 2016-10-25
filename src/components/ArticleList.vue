<template>
  <transition tag="ul" name="item">

    <article-list-item :article="article"></article-list-item>

  </transition-group>
</template>

<script>
  import ArticleListItem from './ArticleListItem.vue';

  export default {
    name: 'article-list',
    components: {
      ArticleListItem
    },
    data () {
      return {
        article: {
          id: 1,
          title: 'GameInformer | Civilization VI Review',
          url: 'http://www.gameinformer.com/games/sid_meiers_civilization_vi/b/pc/archive/2016/05/25/making-all-the-right-moves.aspx'
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
  }
</style>
