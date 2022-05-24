const express = require('express');
const routeur = express.Router();
const userController = require('../controllers/userController');

routeur.get('/', function(req,res,next){
    res.send('login');
});

routeur.post('/', function(req,res,next){




});

module.exports = routeur;