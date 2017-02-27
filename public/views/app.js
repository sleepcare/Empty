var Backbone = require('backbone')
var _ = require('underscore')
var Navbar = require('../components/navbar')
var Sidebar = require('../components/sidebar')
var Viewport = require('../components/viewport')
var Router = require('../controllers/router')


var App = Backbone.View.extend({

	render: function(){
		console.log('rendering...')

		this.navbar = new Navbar
		this.$el.append(this.navbar.render().el)

		this.sidebar = new Sidebar
		this.$el.append(this.sidebar.render().el)

		this.viewport = new Viewport
		this.$el.append(this.viewport.render().el)

		this.router = new Router(this)
		return this
	},

	update: function(){

	}

})

module.exports = App