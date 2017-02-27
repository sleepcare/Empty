var Backbone = require('backbone')
var Model = require('../models/model')

var Models = Backbone.Collection.extend({

	model: Model

})

module.exports = Collections