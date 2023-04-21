//server.js 
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const session = require('express-session');
const {secret} = require('./config.json');


const app = require('./bin/express')();
//var router = require('./src/routers/default')();
const routes = require('./src/routers/index');
//require('./src/routers/default')(router);


app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multer().array());
app.use(
	session({
		secret,
		resave: true,
		saveUninitialized: true,
		cookie: {
			sameSite: 'strict',
			secure: false,
		},
	})
);



app.use('/',routes);


const port = normalizePort(process.env.port || '443');
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