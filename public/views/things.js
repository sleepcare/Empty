var Backbone = require('backbone')
var Card = require('../components/card')

var Things = Backbone.View.extend({

	template: require("../templates/things.hbs"),

	initialize: function(){
		this.collection.on('update',this.update,this)
	},

	render: function(options){
		this.setElement(this.template(options))
		this.rendered = true
		this.collection.forEach(this.add,this)
		return this
	},

	update: function(){
		this.collection.forEach(this.add,this)
	},

	add: function(model){
		var card = new Card({
			model: model
		})
		this.$el.append(card.render({
			title: model.get('name'),
			description: model.get('description'),
			href: window.location.hash + '/' + model.id
		}).el)
	}

})

module.exports = Things