var Backbone = require('backbone')
var _ = require('underscore')

var Card = Backbone.View.extend({

	template: require('../templates/card.hbs'),

	render: function(options){
		this.setElement(this.template(options))
		this.el.onclick = _.bind(function(){
			var href = this.$el.attr('href')
			app.router.navigate(href,{trigger:true})
		},this)
		return this
	}

})

module.exports = Card