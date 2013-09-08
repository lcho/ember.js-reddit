var App = Ember.Application.create();

App.Router.map(function(){
	this.resource('posts');
});

App.PostsRoute = Ember.Route.extend({//find all the posts
	model: function(){
		return App.Post.find();
	}
});

// App.PostRoute = Ember.Route.extend({
// 	model: function(params){
// 		return App.Post.find(params.post_id);//find a particular post
// 	}
// });



