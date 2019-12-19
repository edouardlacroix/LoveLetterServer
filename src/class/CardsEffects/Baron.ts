import Player from '../Player';
import AbstractAction from './Actions/AbstractAction';
import Board from 'class/Board';
import EnemyActionData from 'class/CardsEffects/Actions/EnemyActionData';

export default class Baron extends AbstractAction {
  constructor() {
    super();
  }

  public resolveAction(
    board: Board,
    player: Player,
    data: EnemyActionData
  ): void {
    console.log('HAVE YOU SEEN MY WIFE ?!');
  }
}
