var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var loki = require('lokijs')
var fs = require('fs')
var db = new loki('skeleton.json',{
	autosave: true,
	autoload: fs.existsSync('skeleton.json'),
	serializationMethod: 'pretty'
})
var config = require('./config/server')
var collections = require('./routes/collections')(db)
var documents = require('./routes/documents')(db)

app.use(express.static('public'))
app.use('/node_modules',express.static('node_modules'))

app.use(bodyParser.json())
app.use(collections)
app.use(documents)

app.listen(config.port, config.host, function () {
    var host = this.address()
  	console.log('Listening at %s:%s',host.address,host.port)
})