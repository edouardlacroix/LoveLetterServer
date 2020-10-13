import * as express from 'express';
import * as socketio from 'socket.io';
import * as path from 'path';
import * as cors from 'cors';

import ServerController from './controllers/ServerController';
import BoardController from './controllers/BoardController';
import { listenerCount } from 'cluster';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

// Default Get, will be used to avoid displaying en error if someone tries to open the link
app.get('',  function(req, res) {
  res.send('The server is running correctly.');
});

let server = require('http').Server(app);


// let io = require('socket.io')(app, { origins: '*:*' });
let io = require('socket.io').listen(server);

const serverController = new ServerController();
const boardController = new BoardController();

io.on('connection', function(socket: any) {
  console.log('User : ' + socket.id + ' connected.');
  serverController.initializeSocket(io, socket);
  boardController.initializeBoardForPlayer(io, socket);
});

server.listen(PORT, function() {
  console.log(`listening on *: ${PORT}`);
});
