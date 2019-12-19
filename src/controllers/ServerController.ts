import socketRouteList from '../enums/socketRoute';
import Deck from '../class/Deck';

class ServerController {
  public initializeSocket(io: any, socket: any): void {
    socket.on('message', function(message: any) {
      console.log(message);
    });
    socket.on(socketRouteList.TEST, function(message: any) {
      let deck = new Deck();
      socket.emit('sendDeck', deck);
    });
    socket.on(socketRouteList.GET_ID, () => {
      socket.emit(socketRouteList.SEND_ID, socket.id);
    });
  }
}

export default ServerController;
