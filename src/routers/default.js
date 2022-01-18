//src/routers/default.js
var controller=require('./../controllers/default');

//Injection router d'express
module.exports = function(router){
    //On cree une route vers l'index

    router.get('/',controller.index);
};  