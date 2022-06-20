//bin/express.js
var express = require('express');
const favicon = require('express-favicon');

module.exports = function(){
    var app = express();
    
    //Chemin des vues
    app.set('view engine','ejs');
    app.set('views','./public/views');

    //Alias
    //const bodyParser = require("body-parser");
    //app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true}))

    app.use(favicon("./../public/img/logo.png"));

    //app.use("/", require("./controllers/default"));
    app.use('/css',express.static('./public/css'));
    app.use('/js',express.static('./public/js'));
    app.use('/img',express.static('./public/img'));

    app.use("/static", express.static(__dirname + '/static'));

    return app;
};