'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = Schema({
    name: String,
    price: Number,
    code: Number,
    description: String
})

module.exports = mongoose.model("Product", ProductSchema);