//server.js 
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');




const app = require('./bin/express')();
//var router = require('./src/routers/default')();
const routes = require('./src/routers/index');
//require('./src/routers/default')(router);

app.use('/',routes);

/**
app.get('/', (req, res, next) => {
    res.send(`<h1>Hello world from server</h1>
      <p>From edupala learning express routing</p>
    `);
  });*/

const port = normalizePort(process.env.port || '3000');
app.set('port',port);


app.listen(port);
console.log('Server launched on port ' + port + ' !');



/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
}