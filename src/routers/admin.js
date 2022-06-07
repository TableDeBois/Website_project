const express = require('express');
const routeur = express.Router();
const adminController = require('./../controllers/adminController');


/**
 * Gestion page admin
 */
routeur.get('/', function (req,res,next){
    adminController.checkId;
    res.send('admin');
})


module.exports = routeur;