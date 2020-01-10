import * as express from 'express';
import * as socketio from 'socket.io';
import * as path from 'path';
import * as cors from 'cors';

import ServerController from './controllers/ServerController';
import BoardController from './controllers/BoardController';

const port = 3000;

const app = express();
app.set('port', process.env.PORT || port);
app.use(cors());

let http = require('http').Server(app);
// set up socket.io and bind it to our
// http server.
let io = require('socket.io')(http, { origins: '*:*' });

const serverController = new ServerController();
const boardController = new BoardController();

io.on('connection', function(socket: any) {
  console.log('User : ' + socket.id + ' connected.');
  serverController.initializeSocket(io, socket);
  boardController.initializeBoardForPlayer(io, socket);
});

const server = http.listen(port, function() {
  console.log('listening on *:' + port);
});
