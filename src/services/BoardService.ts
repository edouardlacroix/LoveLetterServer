import Board from '../class/Board';

export default class BoardService {
  public getPlayerById(id: string, board: Board) {
    return board.getPlayers().filter(item => item.getId() === id)[0];
  }

  public getAllPlayersData(board: Board) {
    return board.getPlayers();
  }
}
