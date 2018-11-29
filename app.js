'use strict'

var express = require('express');
var bodyParser = require('body-parser');


var app = express();

// Routes
var product_routes = require('./routes/product');


// Middlewares of body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configure headers and cors


// Base Routes

app.use('/api',product_routes);

app.get('/testing',(req,res) => {
    res.status(200).send({message: "This is the testing method"});
})

module.exports = app;


