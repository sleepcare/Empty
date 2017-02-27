var db = require('./db.js')()

var getCollection = function(model){
	var name = model.collection ? model.collection.url : model.url
	var collection = db.getCollection(name) || db.addCollection(name)
	return collection
}

module.exports = function(method,model,options){
	if (method == 'create'){
		var collection = getCollection(model)
		var doc = collection.insert(model.toJSON())
		if (options.success) options.success(doc)
	}
	if (method == 'read'){
		var collection = getCollection(model)
		var doc
		if (model.collection){
			doc = collection.get(model.id)
		} else {
			doc = collection.find(options.data)
		}
		if (options.success) options.success(doc)
	}
	if (method == 'update'){
		var collection = getCollection(model)
		var doc = collection.update(model.toJSON())
		if (options.success) options.success(doc)
	}
	if (method == 'delete'){
		var collection = getCollection(model)
		var doc = collection.remove(model.toJSON())
		if (options.success) options.success(doc)
	}
}
