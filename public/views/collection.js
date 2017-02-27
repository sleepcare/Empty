var Backbone = require('backbone')
var _ = require('underscore')
var List = require('../components/list')

var Collection = Backbone.View.extend({

	template: require('../templates/collection.hbs'),

	render: function(){
		this.setElement(this.template())
		this.list = new List({
			collection: this.collection
		})
		this.$('#add').on('click',this.add,_.bind(this.add,this))
		this.$el.append(this.list.render().el)
		return this
	},

	add: function(){
		app.router.navigate(location.hash + '/0',{trigger: true})
	}

})

module.exports = Collection