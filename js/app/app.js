App = Ember.Application.create();

//start routes.js
App.Router.map(function(){
	this.resource('posts', function(){
		this.resource('post', { path: ':post_id'});
	});
});

App.PostsRoute = Ember.Route.extend({//find all the posts
	model: function(){
		return App.Post.find();
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params){
		return App.Post.find(params.post_id);//find a particular post
	}
});
//end routes.js

//start models.js
//some settings
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});


//models
App.Post = DS.Model.extend({
	id: DS.attr('number'),
	title: DS.attr('string'),
	extended: DS.attr('string'),
	author: DS.attr('string'),
	publishedAt: DS.attr('date')
});

//fixtures
App.Post.FIXTURES = [{
	id: 1,
	title: 'text post',
	extended: 'hello, world. this is a text post',
	author: 'brandon',
	publishedAt: new Date('1/1/2013')
}, {
	id: 2,
	title: 'text post 2',
	extended: 'hello, world. this is a text post\nwith a new line, wowowowowow',
	author: 'brandon',
	publishedAt: new Date('1/2/2013')
}, {
	id: 3,
	title: 'picture post 1',
	extended: 'http://i.imgur.com/1LmDmct.jpg',
	author: 'brandon',
	publishedAt: new Date('1/3/2013')
}];
//end models.js

//start controllers.js
App.PostsController = Ember.ArrayController.extend();
App.PostController = Ember.ObjectController();
//end controllers.js