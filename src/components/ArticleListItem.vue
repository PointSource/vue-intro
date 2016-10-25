<template>
	<li @click="handleClick">
		{{ article.title }}
	</li>
</template>

<script>
  export default {
    name: 'article-list-item',
    props: [ 'article' ],
    methods: {
      handleClick (event) {
        const coords = { x: event.x, y: event.y };
        this.$parent.$emit('list-item-clicked', coords);
      }
    }
  };
</script>

<style lang="scss" scoped>
  $itemColor: rgb(92, 162, 216);

  li {
    padding: 10px;
    color: $itemColor;
  }
</style>
