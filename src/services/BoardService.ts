import Board from '../class/Board';

export default class BoardService {
  public getPlayerById(id: string, board: Board) {
    return board.getPlayers().filter(item => item.getId() === id)[0];
  }

  public getAllPlayersData(board: Board) {
    return board.getPlayers();
  }

  public getGameUpdatedData(board: Board): Array<Object> {
    let tempArray = []
    board.getPlayers().map(item =>
      tempArray.push(item)
    )
    tempArray.map(item => delete item.cardsInHand)
    //TODO return array with players data
    console.log("UPDATE GAME DISPATCH")
    return tempArray;
  }
}
