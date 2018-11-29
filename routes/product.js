'use strict'

var express = require('express');
var ProductController = require('../controllers/product');
var mdAuthPublic = require('../middlewares/authPublic');

var api = express.Router();

api.get('/products', mdAuthPublic.ensureAuth, ProductController.getProducts);
api.post('/products', mdAuthPublic.ensureAuth, ProductController.saveProducts);
api.put('/products/:id', mdAuthPublic.ensureAuth, ProductController.updateProduct);
api.delete('/products/:id', mdAuthPublic.ensureAuth, ProductController.deleteProduct);

module.exports = api;
