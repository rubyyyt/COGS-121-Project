const express = require('express'); //import express library
const app = express(); //assign to variable (express)

// ejs as view engine
app.set('view engine', 'ejs');

//app.use(express.static('static_files')); //so app can serve static file
app.use(express.static(__dirname + '/public'));

/* const fakeDatabase = {
	'miramonte': {location: 'Orinda', income: 'High', pic: 'miramonte.jpg'},
	'oaklandtech': {location: 'Oakland', income: 'Low', pic: 'otech.jpg'},
	'concordhigh': {location: 'Concord', income: 'Medium', pic: 'concordhigh.jpg'},
	'saintignacious': {location: 'San Francisco', income: 'Very High', pic: 'siprep.jpg'}
}; */

/* app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile); */


/* app.get('/schools', (req, res) => {
	const allSchools = Object.keys(fakeDatabase);
	console.log('allSchools are:', allSchools);
	res.send(allSchools);

}); */

/* app.get('/schools/:schoolid', (req, res) => {
	const nameToLookup = req.params.schoolid;
	const val = fakeDatabase[nameToLookup];
	if(val) {
		res.send(val)
	}
	else {
		res.send({}); //fail for returning empty object
	}
});
*/

//displays register.html file that we created

// start the server at URL: http://localhost:3000/

// @Ruby put the JSON inside of firebase and get mapData to 
//	pull from firebase 
const mapData = require('./mapData.json');

// Index page
app.get('/', function(req, res) {
	res.render('pages/index', {
		data: mapData.results
	});
});

app.get('/index', function(req, res) {
	res.render('pages/index', {
		data: mapData.results
	});
});

app.get('/blank', function(req, res) {
	res.render('pages/blank');
});
app.get('/forgot-password', function(req, res) {
	res.render('pages/forgot-password');
});
app.get('/login', function(req, res) {
	res.render('pages/login');
});
app.get('/register', function(req, res) {
	res.render('pages/register');
});
app.get('/school', function(req, res) {
	res.render('pages/school');
});

// Catch all pages that don't exist
app.get('*', function(req, res) {
	res.render('pages/404');
});

app.listen(8080, () => {
  console.log('Server started at http://localhost:8080/');
});
