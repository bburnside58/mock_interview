// this is the file that communicates with the mysql db.
// all queries are written here 

var connection = require('./connection.js');

var orm = {
	selectAll: function(tableName) {
	    	return new Promise(function(resolve, reject) {
		        var queryString = 'SELECT * FROM ' + tableName;

		        connection.query(queryString, function(err, result) {
		            resolve(result);
		        });
	    	});
	    }
};


module.exports = orm;
