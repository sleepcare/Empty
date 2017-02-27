var Backbone = require('backbone')

var Table = Backbone.View.extend({

	template: require('../templates/table.hbs'),

	initialize: function(){
		this.collection.on('update',this.update,this)
	},

	render: function(){
		this.setElement(this.template())
		if (!this.collection) return this
		var model = this.collection.at(0)
		if (model){
			this.renderHead()
			this.renderBody()
		}
		return this
	},

	renderHead: function(){
		var tr = document.createElement('tr')
		var attrs = this.collection.at(0).toJSON()
		for (var key in attrs){
			var value = attrs[key]
			var cell = document.createElement('td')
			cell.textContent = key
			tr.appendChild(cell)
		}
		this.$('thead').append(tr)
		return this
	},

	renderBody: function(){
		this.collection.forEach(function(model){
			var tr = document.createElement('tr')
			var attrs = model.toJSON()
			for (var key in attrs){
				var value = attrs[key]
				var cell = document.createElement('td')
				cell.textContent = value
				tr.appendChild(cell)
			}
			this.$('tbody').append(tr)
		},this)
		return this
	},

	update: function(){
		this.renderBody()
	}

})

module.exports = Table