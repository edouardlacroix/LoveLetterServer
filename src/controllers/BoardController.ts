import socketRouteList from '../enums/socketRoute';
import Deck from '../class/Deck';
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

  public initializeBoardSocket(io: any, socket: any): void {
    socket.on(socketRouteList.REQUEST_PLAYER_DATA, () => {
      socket.emit(
        socketRouteList.SEND_PLAYER_DATA,
        this.boardService.getPlayerById(socket.id, this.board)
      );
    });
    socket.on(socketRouteList.UPDATE_GAME_DATA_REFRESH, () =>
      io.emit(socketRouteList.UPDATE_GAME_DATA, this.boardService.getGameUpdatedData(this.board))
    )

    // DISCONNECTION OF PLAYER
    socket.on(socketRouteList.DISCONNECT_SELF, () => {
      this.removePlayer(io, socket);
      console.log('DISCONNECT_SELF = ' + socket.id)
      io.emit(socketRouteList.UPDATE_GAME_DATA, this.boardService.getGameUpdatedData(this.board));
    })

    socket.on(socketRouteList.SET_PLAYER_NAME, (data: string) => {
      this.boardService.getPlayerById(socket.id, this.board).setName(data);
      io.emit(socketRouteList.UPDATE_GAME_DATA, this.boardService.getGameUpdatedData(this.board))
    });

    io.emit(socketRouteList.UPDATE_GAME_DATA, this.boardService.getGameUpdatedData(this.board))
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
