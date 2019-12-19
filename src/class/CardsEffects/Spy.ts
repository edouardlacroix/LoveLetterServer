import Player from '../Player';
import AbstractAction from './Actions/AbstractAction';
import Board from 'class/Board';

export default class Spy extends AbstractAction {
  constructor() {
    super();
  }

  public resolveAction(board: Board, player: Player): void {
    console.log('MY NAME IS SPY, RUSSIAN SPY');
  }
}
