'use strict'

// Models

var Product = require('../models/product');
var Controller = require('../shared/controller');
var Config = require("../shared/config.json");


function saveProducts(req,res){
    
}

function getProducts(req, res){

    Controller.handleResponse("get", null, null, null, null, Product, Config.DATA_GET_MSG_ERROR, null, Config.DATA_GET_MSG_OK, (code, payload)=>{
        res.status(code).send(payload);
    });

}

function updateProduct(req,res){

}

function deleteProduct(req,res){

}

module.exports = {
    getProducts,
    saveProducts,
    updateProduct,
    deleteProduct
};