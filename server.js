const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./routers/routers');
const connect = require('./models/connect');
server.listen(3001);

app.use('/', routes);



connect();