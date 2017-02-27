module.exports = function(db){

	var router = require('express').Router()
	var _ = require('underscore')

	// create
	router.post('/',function(req,res){
		res.json(db.addCollection(req.body.collection))
	})

	// list
	router.get('/',function(req,res){
		var names = _.pluck(db.collections,'name')
		res.json(names)
	})

	// delete collection
	router.delete('/:collection',function(req,res){
		res.json(db.removeCollection(req.params.collection))
	})

	return router

}