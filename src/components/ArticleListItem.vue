<template>
	<li @click="handleClick">
		<a :href="article.url" target="_blank">{{ article.title }}</a>
	</li>
</template>

<script>
  export default {
    name: 'article-list-item',
    props: [ 'article' ],
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
