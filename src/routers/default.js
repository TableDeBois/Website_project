//src/routers/default.js
var express=require('express');


var controller=require('./../controllers/default');

var router = require('./../../bin/express-router')();

//var router = express.Router();

router.get('/',controller.index);

router.get('/page1',controller.page1);

module.exports=router;

/**Injection router d'express
module.exports = function(router){
    //On cree une route vers l'index

    


};
module.exports=function(router){
    //on cree une route vers page1

    
}**/
