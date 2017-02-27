var Backbone = require('backbone')
var Model = require('../models/model')

var Collections = Backbone.Collection.extend({

	model: Model

})

module.exports = Collections