const { raw } = require('body-parser');
const { safeHtml } = require('common-tags');
const express = require('express');
const routeur = express.Router();
const userController = require('../controllers/userController');


routeur.get('/', function(req,res,next){
    res.send('checkout');
});


routeur.post('/',function(req,res,next){
    res.redirect('payement');
}); //Unsure