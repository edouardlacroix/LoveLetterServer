import socketRouteList from '../enums/socketRoute';
import Deck from '../class/Deck';
import Board from '../class/Board';
import Player from '../class/Player';

class BoardController {
  private board: Board;

  constructor() {
    this.board = new Board();
  }

  public addPlayer(io: any, socket: any): void {
    if (this.board.getPlayers().length < 6) {
      this.board.addPlayer(new Player(socket.id, 'TOTO'));
    }
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
