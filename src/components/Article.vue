<template>
	<li>
		{{ article.title }}
	</li>
</template>

<script>
export default {
	name: 'article-view',
	props: [ 'article' ],

	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
	},

	methods: {
		articleClicked: function(event) {
			console.log(event);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
