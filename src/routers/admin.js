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

routeur.post('/',function(req,res,next){

    let{Pname:productName, Pprice:productPrice, Pbio:productBio, Purl:productUrl} = req.body;

    if(!productName || !productName){
        res.send("<html><head><title>Error</title></head><body><h1>Champs non renseignés</h1></body></html>")
    }

    adminController.createProduct(productName,productPrice,productBio,productUrl).then((result) =>{
        console.log(result.changes.toString());
        res.redirect('/admin');
    })

})

module.exports = routeur;