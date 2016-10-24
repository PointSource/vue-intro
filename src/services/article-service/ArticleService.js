import Article from './Article';

function ArticleService() {

}

ArticleService.prototype.fetchTop10Articles = function() {
	if (!this.foo) {
		this.foo = 1;
		return [
			new Article({id:1, title: 'hi', url: 'http://cnn.com'}),
			new Article({id:2, title: 'hi again', url: 'http://ibm.com'})
		];
	} else {
		delete this.foo;
		return [
			new Article({id:2, title: 'hi again', url: 'http://ibm.com'}),
			new Article({id:1, title: 'hi', url: 'http://cnn.com'})
		];
	}
};

ArticleService.prototype.fetchArticleById = function(articleId) {
	return new Article({id:1, title: 'hi', url: 'http://cnn.com'});
};

export default ArticleService;
