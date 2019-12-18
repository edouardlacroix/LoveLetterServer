import socketRouteList from '../enums/socketRoute'

class ServerController {
  public initializeSocket(io:any, socket: any): void {
    socket.on('message', function(message: any) {
      console.log(message);
    });
    socket.on(socketRouteList.TEST, function(message: any) {
      console.log('TEST DU TEST : ' + message);
      console.log(io)
    });
    socket.on(socketRouteList.GET_ID, () => {
      socket.emit(socketRouteList.SEND_ID, socket.id);
    });
  }
}

export default ServerController;