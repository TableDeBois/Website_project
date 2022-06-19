const { raw } = require('body-parser');
const { safeHtml } = require('common-tags');
const express = require('express');
const routeur = express.Router();
const userController = require('../controllers/userController');


routeur.get('/', function(req,res,next){
    res.send('register');
});

routeur.post('/', function(req,res,next){
    let{Username:username, Email:email, Password:password, RepPassword:repPassword} = req.body;

    if(!username || !email || !password || !repPassword){
        return res.send('<html><head><title>ERROR!</title></head><body><h1>A FIELD IS MISSING</h1</body></html>');
    }

    username = safeHtml`${username}`;

    if (password !== repPassword){
        return res.send('<html><head><title>ERROR!</title></head><body><h1>THE TWO PASSWORDS ARE DIFFERENT !</h1</body></html>');
    }

    userController.insert(email,username,password).then((result)=> {
        console.log(result.changes.toString());
        res.redirect('/login');
    });

});

module.exports=routeur;