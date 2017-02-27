var Backbone = require('backbone')
var Card = require('./card')

var List = Backbone.View.extend({

	initialize: function(){
		this.collection.on('update',this.update,this)
	},

	render: function(){
		this.update()
		return this
	},

	update: function(){
		this.collection.forEach(function(model){
			var card = new Card({
				model: model
			})
			this.$el.append(card.render().el)
		},this)
		return this
	}

})

module.exports = List