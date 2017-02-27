var _ = require('underscore')
var Backbone = require('backbone')
var FormRow = require('../components/form-row')


var Model = Backbone.View.extend({

	template: require('../templates/model.hbs'),

	initialize: function(){
		this.model.on('change',this.update,this)
	},

	render: function(){
		this.setElement(this.template())
		var data = this.model.toJSON()
		this.$('#delete').on('click',_.bind(this.delete,this))
		var $form = this.$('form')
		for (var key in data){
			if (key == '$loki') continue
			if (key == 'meta') continue
			var row = new FormRow
			row.render({
				label: key,
				name: key.toLowerCase(),
				value: data[key]
			})
			row.$('input').on('change',_.bind(this.save,this))
			$form.append(row.el)
		}
		return this
	},

	save: function(){
		var data = {}
		var inputs = this.$('input')
		inputs.each(_.bind(function(index,input){
			data[input.name] = input.value
			if (index == inputs.length - 1){
				this.model.save(data)
			}
		},this))
		return this
	},

	update: function(){
		return this
	},

	delete: function(){
		this.model.destroy()
	}

})

module.exports = Model