var loki = require('lokijs')
var LokiIndexedAdapter = require('../node_modules/lokijs/src/loki-indexed-adapter')
var idbAdapter = new LokiIndexedAdapter('db')

module.exports = function(callback){

	return new loki('db', {
		adapter: idbAdapter,
		autosave: true,
		autoload: true,
		autoloadCallback: callback
	})

}
