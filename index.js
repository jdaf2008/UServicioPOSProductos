'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;


mongoose.connect('mongodb://localhost:27017/POS_product', { useNewUrlParser: true })
    .then(() => {
        console.log('the POS_product Database connection is successfull');
        
        app.listen(port, ()=>{
            console.log("The local server with node and express works fine")
        });
    })
    .catch(err => console.log(err));
