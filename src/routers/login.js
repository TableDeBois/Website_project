const { safeHtml } = require('common-tags');
const express = require('express');
const routeur = express.Router();
const userController = require('../controllers/userController');

routeur.get('/', function(req,res,next){
    res.send('login');
});

routeur.post('/', function(req,res,next){
    let {Username:username, Password:password} = req.body;
    username = safeHtml`${username}`;

    userController.login(username,password).then(async (loggedIn)=>{
        if(loggedIn){
            req.session.username = username;
            return res.redirect('/home');
        }else{
            return res.send('<html><head><title>ERROR!</title></head><body><h1>WRONG USERNAME OR PASSWORD</h1</body></html>');
        }
    });

});

module.exports = routeur;