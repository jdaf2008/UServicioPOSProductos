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
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();


})

// Base Routes

app.use('/pos/api',product_routes);

app.get('/testing',(req,res) => {
    res.status(200).send({message: "This is the testing method"});
})

module.exports = app;


