const express = require('express'); //import express library 
const app = express(); //assign to variable (express)

app.use(express.static('static_files')); //so app can serve static files
