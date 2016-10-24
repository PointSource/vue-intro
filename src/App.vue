<template>
  <div>
    <button @click="onRefreshClicked">Refresh</button>
    <transition-group tag="ul" name="item">
      <router-link v-for="article in articles" :key="article.id" :to="{ name: 'detail', params: { articleId: article.id }}"></router-link>
      <article-view :article="article"></article-view>
    </transition-group>
  </div>
</template>

<script>
  import ArticleList from './components/ArticleList.vue';
  import ArticleService from './services/article-service/ArticleService';

  export default {
    components: {
      ArticleList
    },
    data () {
      return {
        articles: 'Welcome to Your Vue.js App'
      };
    },

    methods: {
      onRefreshClicked: () => {
        this.articles = this.articleService.fetchTop10Articles();
      }
    },
    beforeMount: () => {
      this.articleService = new ArticleService();
      this.articles = this.articleService.fetchTop10Articles();
    }
  };

</script>

<style lang="scss">
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

