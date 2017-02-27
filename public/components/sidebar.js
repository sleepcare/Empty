var Backbone = require('backbone')
var ListItem = require('./list-item')

var Sidebar = Backbone.View.extend({

	template: require('../templates/sidebar.hbs'),

	render: function(options){
		this.setElement(this.template(options))
		this.offcanvas = UIkit.offcanvas(this.el)[0]
		return this
	}


})

module.exports = Sidebar