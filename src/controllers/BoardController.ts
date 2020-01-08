import socketRouteList from '../enums/socketRoute';
import Board from '../class/Board';
import Player from '../class/Player';
import BoardService from '../services/BoardService';

class BoardController {
  private board: Board;
  private boardService: BoardService;

  constructor() {
    this.board = new Board();
    this.boardService = new BoardService();
  }

  // Init board
  public initializeBoardForPlayer(io: any, socket: any): void {
    this.addPlayer(io, socket);
    this.initializeBoardSocket(io, socket);
  }

  public addPlayer(io: any, socket: any): void {
    if (this.board.getPlayers().length < 6) {
      this.board.addPlayer(new Player(socket.id, 'Anonyme'));
    }
  }

  public removePlayer(io: any, socket: any): void {
    this.board.removePlayerById(socket.id);
  }

  // MAIN UPDATE DISPATCH
  public dispatchUpdateData(io: any, socket: any): void {
    io.emit(
      socketRouteList.UPDATE_GAME_DATA,
      this.boardService.getGameUpdatedData(this.board)
    );
  }

  // --------------------                INIT BOARD SOCKET LISTENER   -----------------------------------
  public initializeBoardSocket(io: any, socket: any): void {
    socket.on(socketRouteList.UPDATE_GAME_DATA_REFRESH, () =>
      this.dispatchUpdateData(io, socket)
    );

    // DISCONNECTION OF PLAYER
    socket.on(socketRouteList.DISCONNECT_SELF, () => {
      console.log('DISCONNECT_SELF = ' + socket.id);
      this.removePlayer(io, socket);
      io.emit(
        socketRouteList.UPDATE_GAME_DATA,
        this.boardService.getGameUpdatedData(this.board)
      );
    });

    // SET PLAYER NAME
    socket.on(socketRouteList.SET_PLAYER_NAME, (data: string) => {
      this.boardService.getPlayerById(socket.id, this.board).setName(data);
      io.emit(
        socketRouteList.UPDATE_GAME_DATA,
        this.boardService.getGameUpdatedData(this.board)
      );
    });

    // ON PLAY CARD
    socket.on(socketRouteList.PLAY_CARD, (data: string) => {
      console.log(data.id);
      socket.emit(socketRouteList.YOUR_TURN);
    });

    this.dispatchUpdateData(io, socket);
  }

  //  ============      GETTER   =============
  public getBoard(): Board {
    return this.board;
  }

  public setBoard(board: Board): void {
    this.board = board;
  }
}

export default BoardController;
