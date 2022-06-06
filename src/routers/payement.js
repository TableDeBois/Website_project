const express = require('express');
const routeur = express.Router();
const userController = require('../controllers/userController');

routeur.get('/',function(req,res,next){
    if(!req.session.user) {
        res.redirect('/checkout');
        return;
    }

    const { user } = req.session;

    res.send('payement');
});