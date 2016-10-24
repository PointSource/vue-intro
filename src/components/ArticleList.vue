<template>
	<li>
		{{ article.title }}
	</li>
</template>

<script>

  export default {
    name: 'article-list',
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
