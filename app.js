const express = require('express'); //import express library 
const app = express(); //assign to variable (express)

app.use(express.static('static_files')); //so app can serve static files

const fakeDatabase = {
	'Miramonte': {location: 'Orinda', income: 'High', pic: 'miramonte.jpg'},
	'Oakland Tech': {location: 'Oakland', income: 'Low', pic: 'otech.jpg'},
	'Concord High': {location: 'Concord', income: 'Medium', pic: 'concordhigh.jpg'},
	'Saint Ignacious': {location: 'San Francisco', income: 'Very High', pic: 'siprep.jpg'}
};

app.get('/schools', (req, res) => {
	const allSchools = Object.keys(fakeDatabase);
	console.log('allSchools are:', allSchools);
	res.send(allSchools);

});

app.get('/schools/:schoolid', (req, res) => {
	const nameToLookup = req.params.schoolid;
	const val = fakeDatabase[nameToLookup];
	if(val) {
		res.send(val)
	}
	else {
		res.sned({}); //fail for returning empty object
	}
});

app.listen(3000, () => {
	console.log("Server started at http://localhost:3000");
});