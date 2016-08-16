

/* Here are the routes. We pass the items to query we want HERE into the orm.
Rendering of the handlebars also occurs here.
*/


var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//
var orm = require('../config/orm.js');