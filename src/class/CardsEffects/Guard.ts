import Player from '../Player';
import AbstractAction from './Actions/AbstractAction';
import Board from 'class/Board';
import EnemyAndCardActionData from 'class/CardsEffects/Actions/EnemyAndCardActionData';

export default class Guard extends AbstractAction {
  constructor() {
    super();
  }

  public resolveAction(
    board: Board,
    player: Player,
    data: EnemyAndCardActionData
  ): void {
    console.log('I BRING DEMOCRACY');
  }
}
