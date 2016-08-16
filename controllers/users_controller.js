

/* Here are the routes. We pass the items to query we want HERE into the orm.
Rendering of the handlebars also occurs here.
*/

// var app = require('../server.js')

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//
var orm = require('../config/orm.js');


var users_controller = function(app){
	app.get('/', function(req, res) {
    	// orm.selectAll();
    	orm.selectAll('users').then(function(data) {
			console.log(data);
			res.render('people/index', {
	            users: data
	        });
		});
    });
};

module.exports = users_controller;