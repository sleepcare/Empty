var Collection = function(db){

	this.findOrCreate = function(req,res,next){
		var name = req.params.collection
		if (!name) return res.json('collection name required')
		req.collection = db.getCollection(name) || db.addCollection(name)
		next()
	}

}

module.exports = function(db){
	return new Collection(db)
}
