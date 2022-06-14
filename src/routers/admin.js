const { Title } = require('chart.js');
const express = require('express');
const { router } = require('server');
const routeur = express.Router();
const adminController = require('./../controllers/adminController');


/**
 * Gestion page admin
 */
routeur.get('/', function (req,res,next){
    adminController.checkId;
    res.send('admin');
})

routeur.post('/addProduct',function(req,res,next){

    let{Pname:productName, Pprice:productPrice} = req.body;

    if(!productName || !productName){
        res.send("<html><head><title>Error</title></head><body><h1>Champs non renseignés</h1></body></html>")
    }

    adminController.createProduct(productName,productPrice).then(result =>{
        console.log(result.changes.toString());
        res.redirect(adminController.admin);
    })

})

module.exports = routeur;