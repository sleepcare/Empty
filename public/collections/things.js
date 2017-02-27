var Backbone = require('backbone')
var Thing = require('../models/thing')

var Things = Backbone.Collection.extend({

	url: '/things',

	model: Thing

})

module.exports = Things