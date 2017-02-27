var Backbone = require('backbone')

var FormRow = Backbone.View.extend({

	template: require('../templates/form-row.hbs'),

	render: function(options){
		this.setElement(this.template(options))
		return this
	}

})

module.exports = FormRow