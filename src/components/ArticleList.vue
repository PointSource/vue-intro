<template>
  <div class="warpper">
    <article-list-item :article="article"></article-list-item>

    <div v-if="coords" class="coords">
      <b>click coordinates</b>: {{ coords.x }}, {{ coords.y }}
    </div>
  </div>
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
        coords: null,
        article: {
          id: 1,
          title: 'GameInformer | Civilization VI Review',
          url: 'http://www.gameinformer.com/games/sid_meiers_civilization_vi/b/pc/archive/2016/05/25/making-all-the-right-moves.aspx'
        }
      };
    },
    created () {
      this.$on('list-item-clicked', (data) => {
        this.coords = data
      });
    }
  };
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
  }

  .coords {
    padding: 20px;
  }
</style>
