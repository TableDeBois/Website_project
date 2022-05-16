//server.js 
var app = require('./bin/express')();
var router = require('./src/routers/default')();

require('./src/routers/default')(router);

app.use('/',router);

/**
app.get('/', (req, res, next) => {
    res.send(`<h1>Hello world from server</h1>
      <p>From edupala learning express routing</p>
    `);
  });*/

app.listen(8080);
console.log('Server launched on port 8080 !');

