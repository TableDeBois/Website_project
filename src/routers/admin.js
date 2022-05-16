const express = require =('express');
const routeur = express.Router();
const adminController = require('./../controllers/adminController');


/**
 * Gestion page admin
 */
router.get('/', function (req,res,next){
    adminController.checkId;
    res.send(/**page admin */);
})


module.exports = routeur;