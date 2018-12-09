'use strict'

require('dotenv').load();
var mongoose = require('mongoose');
var app = require('./app');

let urlBD = process.env.URLBD || "mongodb://localhost:27017/pos_prod_backend"
let port = process.env.PORT || 3789;


mongoose.connect(urlBD, { useNewUrlParser: true })
    .then(() => {
        console.log('the POS_product Database connection is successfull');
        
        app.listen(port, ()=>{
            console.log("The local server with node and express works fine")
        });
    })
    .catch(err => console.log(err));
