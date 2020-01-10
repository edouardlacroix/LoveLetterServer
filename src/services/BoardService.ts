import Board from '../class/Board';
import Player from 'class/Player';

export default class BoardService {
  public getPlayerById(id: string, board: Board) {
    return board.getPlayers().filter(item => item.getId() === id)[0];
  }

  public getAllPlayersData(board: Board) {
    return board.getPlayers();
  }

  public getGameUpdatedData(board: Board, playerId: String): Array<Object> {
    let gameData: Array<Object> = [];
    let tempArray: Array<Object> = [];
    board.getPlayers().map(item => tempArray.push(Object.assign(item)));
    tempArray.map((item: Player): void => {
      delete item.getCardsInHand;
    });
    gameData.push(tempArray);
    gameData.push({ cardsLeft: board.getDeck().getDeck().length });
    console.log('UPDATE GAME DISPATCH');
    return gameData;
  }
}
