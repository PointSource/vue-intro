<template>
	<li @click="handleClick">
		{{ article.title }}
	</li>
</template>

<script>

  export default {
    name: 'article-list-item',
    props: [ 'article' ],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },

    methods: {
      handleClick (event) {
        console.log(event.x, event.y);
      }
    }
  };
</script>

<style lang="scss" scoped>
  li {
    padding: 10px;
  }
</style>
