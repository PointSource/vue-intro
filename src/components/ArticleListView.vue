<template>
	<div>
		<ul>
			<li v-for="article in articles" @click="articleClicked">
				{{ article.title }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'article-list-view',
	props: [ 'articles' ],

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
