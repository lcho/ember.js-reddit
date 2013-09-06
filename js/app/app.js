App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Router.map(function(){
	this.resource('about');
	this.resource('items', function(){
		this.resource('item', { path: ':item_id'});
	});
});

App.ItemsRoute = Ember.Route.extend({
	model: function(){
		return App.Item.find();
	}
});