<template>
  <div>
    <iframe :src="article.url"></iframe>
  </div>
</template>

<script>
  import ArticleService from '../services/article-service/ArticleService';

  export default {
    name: 'detail',
    props: [ 'articleId' ],

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },

    beforeMount: function() {
      this.articleService = new ArticleService();
      this.article = this.articleService.fetchArticleById(this.articleId);
      console.log(this.article);
    }

  };
</script>

<style scoped lang="scss">
  iframe {
    width: 100%;
    height: 100%;
  }
</style>
