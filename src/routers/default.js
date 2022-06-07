//src/routers/default.js
var express=require('express');


var controller=require('./../controllers/default');

var adminController=require('./../controllers/adminController')

var router = require('./../../bin/express-router')();

//var router = express.Router();

router.get('/',controller.index);
router.get('/home',controller.index);

router.get('/register',controller.register);
router.get('/login',controller.login);
router.get('/checkout',controller.checkout);
router.get('/payement',controller.payement);
router.get('/admin',adminController.admin);

module.exports=router;

/**Injection router d'express
module.exports = function(router){
    //On cree une route vers l'index

    


};
module.exports=function(router){
    //on cree une route vers page1

    
}**/
