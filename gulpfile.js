var gulp = require('gulp')
var shell = require('shelljs')
var fs = require('fs')
var moment = require('moment')
var directories = [
	'./public/collections',
	'./public/controllers',
	'./public/library',
	'./public/models',
	'./public/templates',
	'./public/views',
	'./public/index.js'
]

var bundle = function(eventType,filename){
	if (eventType) console.log(moment().format('h:mm:ss'),eventType,filename)
	shell.exec('browserify -t hbsfy public/index.js > public/bundle.js')
}

gulp.task('watch', function(done) {
	directories.forEach(function(dir){
		fs.watch(dir,{recursive: true},bundle)
	})
	bundle()
})

gulp.task('bundle',bundle)
