/*
 * app.js
*/

var http = require('http');
var express = require('express');
//var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

//get settings
var setting = require('./settings');

var app = express();

app.use(session({
    secret: setting.cookie.privateKey,
    saveUninitialized: false, // don't create session until something stored 
    resave: false, //don't save session if unmodified 
    store: new MongoStore({
    	host : setting.mongodb.dbUrl,
    	prot : setting.mongodb.prot,
    	db : setting.mongodb.sessionDBname,
    	autoRemove : 'native'
    })
}));


app.get('/', function(req, res, next){
	console.log(req.session); 
	res.end('<h1> hello world </h1>');
});


var server = http.createServer(app).listen(setting.system.port, function(){
  var host = server.address().address
  var port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)	
});


