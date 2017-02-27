module.exports = function(db){

	var router = require('express').Router()
	var utilities = require('../library/utilities')
	var collection = require('../library/collection')(db)
	var doc = require('../library/document')(db)

	router.use('/:collection',
		collection.findOrCreate,
		utilities.parseQuery)

	router.use('/:collection/:id',
		doc.findById)

	// create
	router.post('/:collection',function(req,res){
		res.json(req.collection.insert(req.body))
	})

	// list
	router.get('/:collection',function(req,res){
		res.json(req.collection.find(req.query))
	})

	// read
	router.get('/:collection/:id',function(req,res){
		res.json(req.doc)
	})

	// update
	router.put('/:collection/:id',function(req,res){
		for (var key in req.body) req.doc[key] = req.body[key]
		res.json(req.collection.update(req.doc))
	})

	// destroy
	router.delete('/:collection/:id',function(req,res){
		res.json(req.collection.remove(req.doc))
	})

	return router
}