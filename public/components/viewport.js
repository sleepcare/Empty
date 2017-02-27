var Backbone = require('backbone')

var Viewport = Backbone.View.extend({

	template: require('../templates/viewport.hbs'),

	render: function(options){
		this.setElement(this.template(options))
		return this
	}

})

module.exports = Viewport