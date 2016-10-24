<template>
  <div>
    <button @click="onRefreshClicked">Refresh</button>
    <transition-group tag="ul" name="item">
       <router-link v-for="article in articles" :key="article.id" :to="{ name: 'detail', params: { articleId: article.id }}">
        <article-view :article="article"></article-view>
      </router-link>
    </transition-group>


    <transition-group tag="ul" name="item">
        <article-view v-for="article in articles" :key="article.id" :article="article"></article-view>
    </transition-group>

  </div>
</template>

<script>
import ArticleView from './Article.vue';
import ArticleService from '../services/article-service/ArticleService';

export default {
  name: 'master-view',
  components: {
    ArticleView
  },

  data () {
    return {
      articles: 'Welcome to Your Vue.js App'
    };
  },

  methods: {
    onRefreshClicked: function(event) {
      console.log(event);
      this.articles = this.articleService.fetchTop10Articles();
    }
  },

  beforeMount: function() {
    this.articleService = new ArticleService();
    this.articles = this.articleService.fetchTop10Articles();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.item-move, .item-enter-active, .item-leave-active {
  // transition: all 2s cubic-bezier(.55,0,.1,1);
  transition: transform 2s cubic-bezier(.55,0,.1,1);
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
</style>
