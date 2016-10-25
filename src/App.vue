<template>
  <div class="article-list">
    <button @click="refresh">Refresh</button>
    <article-list :articles="articles"></article-list>
  </div>
</template>

<script>
  import ArticleList from './components/ArticleList.vue';
  import articleService from './services/article';

  export default {
    components: {
      ArticleList
    },
    data () {
      return {
        articles: []
      };
    },

    methods: {
      refresh () {
        this.articles = [];
        fetchArticles.call(this);
      }
    },

    created: fetchArticles
  };

  function fetchArticles() {
    articleService.fetch().then((articles) => {
      this.articles = articles;
    });
  }

</script>

<style lang="scss">
  button {
    float: right;
  }

  .article-list {
    margin: 0 auto;
    width: 800px;
  }

  .item-move, .item-enter-active, .item-leave-active {
    transition: all 0.5s cubic-bezier(.55,0,.1,1);
  }

  .item-enter {
    opacity: 0;
    transform: translate(30px, 0);
  }

  .item-leave-active {
    position: absolute;
    opacity: 0;
    transform: translate(30px, 0);
  }

  body {
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 15px;
    background-color: lighten(#eceef1, 30%);
    margin: 0;
    padding-top: 55px;
    color: #34495e;
    height: 600px;
  }

  #app {
    height: 100%;
  }

  a {
    color: #34495e;
    text-decoration: none;
    display: block;
  }

  .header {
    background-color: #ff6600;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;

    max-width: 800px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;
  }

  .view {
    margin: 0 auto;
    position: relative;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>

