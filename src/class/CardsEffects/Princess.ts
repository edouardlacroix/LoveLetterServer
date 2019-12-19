import Player from '../Player';
import AbstractAction from './Actions/AbstractAction';
import Board from 'class/Board';

export default class Princess extends AbstractAction {
  constructor() {
    super();
  }

  public resolveAction(board: Board, player: Player): void {
    console.log('STEPHANIE DE MONACO');
  }
}
