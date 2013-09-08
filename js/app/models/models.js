//some settings
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});


//models
App.Post = DS.Model.extend({
	title: DS.attr('string'),
	extended: DS.attr('string'),
	author: DS.attr('string'),
	publishedAt: DS.attr('date')
});

//fixtures
App.Post.FIXTURES = [{
	title: 'text post',
	extended: 'hello, world. this is a text post',
	author: 'brandon',
	publishedAt: new Date('1/1/2013')
}, {
	title: 'text post 2',
	extended: 'hello, world. this is a text post\nwith a new line, wowowowowow',
	author: 'brandon',
	publishedAt: new Date('1/2/2013')
}, {
	title: 'picture post 1',
	extended: 'http://i.imgur.com/1LmDmct.jpg',
	author: 'brandon',
	publishedAt: new Date('1/3/2013')
}];