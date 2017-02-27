var Backbone = require('backbone')

var Navbar = Backbone.View.extend({

	template: require('../templates/navbar.hbs'),

	render: function(options){
		this.setElement(this.template(options))
		return this
	}

})

module.exports = Navbar