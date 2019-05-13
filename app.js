// TODO: add ES lint

const express = require('express'); //import express library
const app = express(); //assign to variable (express)
const path = require('path');

app.use(express.static('static_files')); //so app can serve static files
app.use(express.static('views'));		 //use views too?

const fakeDatabase = {
	'miramonte': {location: 'Orinda', income: 'High', pic: 'miramonte.jpg'},
	'oaklandtech': {location: 'Oakland', income: 'Low', pic: 'otech.jpg'},
	'concordhigh': {location: 'Concord', income: 'Medium', pic: 'concordhigh.jpg'},
	'saintignacious': {location: 'San Francisco', income: 'Very High', pic: 'siprep.jpg'}
};

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
	res.send('hello world');
});

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
		res.send({}); //fail for returning empty object
	}
});


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/cogs-121-project");

//displays register.html file that we created
app.use("/", (req, res) => {
 res.sendFile(__dirname + "/registerSchool.html");
});

app.get("/", (req, res) => {
 res.send("Hello World");
});

//defines schema
var nameSchema = new mongoose.Schema({
 schoolname: String,
});

//create model from schema
var User = mongoose.model("User", nameSchema);

//framework of endpoint
app.post("/registerSchool.html", (req, res) => {

});

//adds the body-parser middleware to our application and configure it
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//final endpoint
app.post("/registerSchool.html", (req, res) => {
 var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

var port = 3000;

app.listen(port, () => {
 console.log("Server listening on port " + port);
});
