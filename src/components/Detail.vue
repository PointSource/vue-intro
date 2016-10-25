<template>
  <div class="wrapper">
    <iframe v-if="article" :src="article.url"></iframe>
  </div>
</template>

<script>
  import articleService from '../services/article';

  export default {
    name: 'detail',

    data () {
      return {
        article: null
      };
    },

    watch: {
      $route: 'loadArticle'
    },

    methods: {
      loadArticle () {
        const id = this.$route.params.articleId;
        this.article = articleService.fetchById(id);
      }
    },

    created () {
      this.loadArticle();
    }
  };
</script>

<style scoped lang="scss">
  .wrapper {
    text-align: center;
  }

  iframe {
    width: 800px;
    height: 2000px;
  }
</style>
