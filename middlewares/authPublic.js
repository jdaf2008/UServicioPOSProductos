'use scrict'

require('dotenv').load();
var jwt = require('jwt-simple');
var moment = require('moment');
var Config = require("../shared/config.json");
var secret = process.env.SECRET_PUBLIC_KEY;


exports.ensureAuth = function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message:Config.AUTHENTICATION_HEADER_MSG_ERROR})
    }
    
    var token = req.headers.authorization;

    try {
        var payload = jwt.decode(token,secret);

        if(payload.name != Config.BASIC_NAME){
            return res.status(403).send({message:Config.AUTHENTICATION_TOKEN_ERROR, payload:payload});
        }

    } catch(ex) {

        return res.status(403).send({message:Config.AUTHENTICATION_TOKEN_ERROR});
    }

    next();
}