const express = require('express');
const routeur = express.Router();
const userController = require('../controllers/userController');


routeur.get('/', function(req,res,next){
    res.send('register');
});

routeur.post('/', function(req,res,next){
    let{Username:username, Email:email, Password:password, RepPassword:repPassword} = req.body;
    


});

module.exports=routeur;