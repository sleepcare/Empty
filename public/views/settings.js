var Backbone = require('backbone')

var Settings = Backbone.View.extend({

	template: require('../templates/settings.hbs'),

	render: function(options){
		this.setElement(this.template(options))
		return this
	}

})

module.exports = Settings