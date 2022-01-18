//server.js 
var app = require('./bin.express')();
var router = require('./bin/express-router')();

require('./src/routers/default')(router);

app.use('/',router);

app.listen(8080);
console.log('Server launched on port 8080 !');

