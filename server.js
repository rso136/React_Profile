// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Comment = require('./server/model.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect('mongodb://heroku_c06pqq3f:fn11607q81qcl0n7f87e435kpr@ds027175.mlab.com:27175/heroku_c06pqq3f');
var db = mongoose.connection;

db.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function () {
	console.log('Mongoose connection successful.');
});

app.post('/api/saved', function(req, res){

	Comment.create({"email": req.body.email, "date": Date.now(), "comment": req.body.comment}, function(err, comment){
		if(err){
			console.log(err);
		}
		else{
			console.log(comment);
			res.redirect('/');
		}
	})

});

app.get('/', function(req, res){
	res.sendFile('./public/index.html');
})

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});