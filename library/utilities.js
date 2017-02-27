var Utilites = function(){

	this.parseQuery = function(req,res,next){
		for (var key in req.query){
			var value = req.query[key]
			try {
				req.query[key] = JSON.parse(value)
			} catch (error) { }
		}
		next()
	}



}

module.exports = new Utilites