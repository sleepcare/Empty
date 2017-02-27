var Backbone = require('backbone')
var Collections = {
	Things: require('../collections/things')
}
var Views = {
	Settings: require('../views/settings'),
	Things: require('../views/things')
}
var _ = require('underscore')

var Router = Backbone.Router.extend({

	initialize: function(app){
		this.viewport = app.viewport
		this.collections = {}
		Backbone.history.start()
	},

	routes: {
		'home': 'home',
		'things': 'things',
		'profile': 'profile',
		'settings': 'settings',
		'*default': 'home'
	},

	home: function(){

	},

	things: function(){
		var collection = new Collections.Things
		var view = new Views.Things({
			collection: collection
		})
		this.showView(view)
		collection.fetch()
	},

	profile: function(name){

	},

	settings: function(name,id){
		var view = new Views.Settings
		this.showView(view)
		return this
	},

	showView: function(view){
		var viewport = this.viewport
		if (this.view && this.view != view){
			viewport.$el.addClass('uk-animation-slide-left uk-animation-reverse')
			setTimeout(function(){
				viewport.$el.removeClass('uk-animation-slide-left uk-animation-reverse')
				viewport.$el.empty().append(view.render().el)
				viewport.$el.addClass('uk-animation-slide-left')
			},1000)
		} else {
			view.render().$el.addClass('uk-animation-slide-left')
			viewport.$el.empty().append(view.el)
		}
		this.view = view
	}

})

module.exports = Router