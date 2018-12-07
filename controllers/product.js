'use strict'

// Models

var Product = require('../models/product');
var Controller = require('../shared/controller');
var Config = require("../shared/config.json");


function saveProducts(req,res){
       // Create product object
       var product = new Product();

       // get requested parameters
       var params =  req.body;


       console.log(params);
   
       // Assign value to product
       if(params.name){

        console.log(params.name)
   
           product.name = params.name;
           product.price = params.price;
           product.code = params.code;
           product.description = params.description;

   
           Controller.handleResponse('save', {name:product.name.toLowerCase()}, null, product, null, Product, Config.DATA_SAVE_MSG_ERROR, Config.ERROR_DATA, Config.DATA_SAVE_MSG_OK, (code, payload)=>{
               res.status(code).send(payload);
           });
   
       } else {
           res.status(404).send({message:Config.ERROR_DATA});
       } 
}

function getProducts(req, res){

    Controller.handleResponse("get", null, null, null, null, Product, Config.DATA_GET_MSG_ERROR, null, Config.DATA_GET_MSG_OK, (code, payload)=>{
        res.status(code).send(payload);
    });

}

function updateProduct(req,res){
    var parameterId = req.params.id
    var update = req.body;

    Controller.handleResponse("update", null, update, null, parameterId, Product, Config.DATA_UPDATE_MSG_ERROR, null, Config.DATA_UPDATE_MSG_OK, (code, payload)=>{
        res.status(code).send(payload);
    });
}

function deleteProduct(req,res){
    var parameterId = req.params.id;
    // Temporal
    res.status(405).send({mesagge:"method not allowed"});

    // Controller.handleResponse("delete", null, null, null, parameterId, City, Config.DATA_DELETE_MSG_ERROR, null, Config.DATA_DELETE_MSG_ERROR, (code, payload)=>{
    //     res.status(code).send(payload);
    // });
}

module.exports = {
    getProducts,
    saveProducts,
    updateProduct,
    deleteProduct
};