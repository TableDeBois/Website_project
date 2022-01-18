//bin/express.js
var express = require('express');

module.exports = function(){
    var app = express();
    
    //Chemin des vues
    app.set('view engine','jade');
    app.set('views','./public/views');

    //Alias
    app.use('/css',express.static('./public/css'));
    app.use('/js',express.static('./public/js'));
    //app.use('/img',express.static('./public/img'));

    return app;
};