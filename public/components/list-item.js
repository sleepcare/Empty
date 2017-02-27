var Backbone = require('backbone')

var ListItem = Backbone.View.extend({

	template: require('../templates/list-item.hbs'),

	render: function(options){
		this.setElement(this.template(options))
		return this
	}

})

module.exports = ListItem