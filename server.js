var express = require('express'); 
var request = require('request');

var app = express();


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost:3306',
    database : 'zdale2_track_results_db',
    user     : 'zdale2_admin',
    password : process.env.DB_PASSWORD,
});


app.use(express.static(__dirname + '/'));

app.get('/test', function(req, res, next) {
  res.json({ message: 'Hello World' });
});

app.get('/results', function(req, res, next) {
	
	connection.connect(function(err) {
	    if (err) {
	        console.error('Error connecting: ' + err.stack);
	        return;
	    }
	    console.log('Connected as id ' + connection.threadId);
	});

	connection.query('SELECT * FROM results', function (error, results, fields) {
	    if (error)
	        throw error;

	    results.forEach(result => {
	        console.log(result);
	    });
	});

	connection.end();
});

app.get('/athletes', function(req, res, next) {
	connection.connect(function(err) {
	    if (err) {
	        console.error('Error connecting: ' + err.stack);
	        return;
	    }
	    console.log('Connected as id ' + connection.threadId);
	});

	connection.query('SELECT * FROM athletes', function (error, results, fields) {
	    if (error)
	        throw error;

	    results.forEach(result => {
	        console.log(result);
	    });
	});

	connection.end();
});


console.log('Listening on 8000');
app.listen(8000);