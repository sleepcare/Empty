var Document = function(db){

	this.findById = function(req,res,next){
		req.doc = req.collection.get(parseInt(req.params.id))
		next()
	}

}

module.exports = function(db){
	return new Document(db)
}